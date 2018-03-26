import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order-size',
  templateUrl: './order-size.component.html',
  styleUrls: ['./order-size.component.css']
})
export class OrderSizeComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_order_size = new FormControl();
      order_size = new FormControl();
      newOrderSize = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      order_sizes : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_order_size: this.add_order_size
    });
    this.editForm = this.fb.group({
      order_size: this.order_size,
      newOrderSize: this.newOrderSize
    });
        this.datalistService.getOrderSize().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.order_sizes = data.data[0].datalist.order_size;
            this.newArray = [];
            var m = this.order_sizes;
            for (var _i = 0; _i < m.length; _i++) {
               this.newArray.push({
                order_sizes:  m[_i],
                order_sizeEdit: false
                   });console.log(this.newArray)
        }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.order_size);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addOrderSize(formdata)
          .subscribe(data => {
            if (data.success === false) {
              // this.toastr.error(data.message);
            } else {
              console.log(data);
              this.ngOnInit();

            }
            this.registerForm.reset();
          });
      }
    }
    removeButton(order_size: any): void {
      this.datalistService.removeOrderSize(order_size)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(order_size, newOrderSize): void {
    this.datalistService.updateOrderSize(order_size, newOrderSize.newOrderSize)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickOrderSize(editing): void {
      console.log(editing)
      if(editing.order_sizeEdit === false) {
        editing.order_sizeEdit = true;
      } else if (editing.order_sizeEdit === true){
        editing.order_sizeEdit = false;
      }
      this.editForm.get('newOrderSize').setValue(editing.order_sizes);
  
      }
      doneEditOrderSize(editing): void {
        if(editing.order_sizeEdit === false) {
          editing.order_sizeEdit = true;
        } else if (editing.order_sizeEdit === true){
          editing.order_sizeEdit = false;
        }
  
        }

    }
