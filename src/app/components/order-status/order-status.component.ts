import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_order_status = new FormControl();
      order_status = new FormControl();
      newOrderStatus = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      order_statuses : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_order_status: this.add_order_status
    });
    this.editForm = this.fb.group({
      order_status: this.order_status,
      newOrderStatus: this.newOrderStatus
    });
        this.datalistService.getOrderStatus().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.order_statuses = data.data[0].datalist.order_status;
            this.newArray = [];
            var m = this.order_statuses;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            order_statuses:  m[_i],
                            order_statuseEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.order_status);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addOrderStatus(formdata)
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
    removeButton(order_status: any): void {
      this.datalistService.removeOrderStatus(order_status)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(order_status, newOrderStatus): void {
    this.datalistService.updateOrderStatus(order_status, newOrderStatus.newOrderStatus)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }

    doubleClickOrderStatus(editing): void {
      console.log(editing)
      if(editing.order_statuseEdit === false) {
        editing.order_statuseEdit = true;
      } else if (editing.order_statuseEdit === true){
        editing.order_statuseEdit = false;
      }
      this.editForm.get('newOrderStatus').setValue(editing.order_statuses);
  
      }
      doneEditOrderStatus(editing): void {
        if(editing.order_statuseEdit === false) {
          editing.order_statuseEdit = true;
        } else if (editing.order_statuseEdit === true){
          editing.order_statuseEdit = false;
        }
  
        }

    }
