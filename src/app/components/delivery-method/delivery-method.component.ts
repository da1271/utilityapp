import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.css']
})
export class DeliveryMethodComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_name = new FormControl();
      add_description = new FormControl();
      name = new FormControl();
      description = new FormControl();
      newName = new FormControl();
      newDescription = new FormControl();
      newArray = [];
      rows = [];
      skus : any;
      deliveryMethods : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_name: this.add_name,
          add_description: this.add_description
    });
    this.editForm = this.fb.group({
      newName: this.newName,
      newDescription: this.newDescription,
    });
        this.datalistService.getDeliveryMethod().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.deliveryMethods = data.data[0].datalist.delivery_method;
            var m = this.deliveryMethods
            this.newArray = [];

            for (var _i = 0; _i < m.length; _i++) {
              this.newArray.push({
                delivery_method:  m[_i],
                delivery_methodEdit: false
                  });console.log(this.newArray)
       }
          }
    });
      }

      addButton(formdata: any): void {
        // console.log(formdata)
      if (this.registerForm.dirty && this.registerForm.valid) {
        console.log(this.registerForm.value)
        this.datalistService.addDeliveryMethod(formdata)
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
    removeButton(name, description): void {
      this.datalistService.removeDeliveryMethod(name, description)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(name, description, formdata): void {
      console.log(formdata.newName)
      console.log(name)
      console.log(description)
    this.datalistService.updateDeliveryMethod(name, description, formdata)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }

    doubleClickDeliveryMethod(editing): void {
      console.log(editing)
      if(editing.delivery_methodEdit === false) {
        editing.delivery_methodEdit = true;
      } else if (editing.delivery_methodEdit === true){
        editing.delivery_methodEdit = false;
      }
      this.editForm.get('newName').setValue(editing.delivery_method.name);
      this.editForm.get('newDescription').setValue(editing.delivery_method.description);

      }
      doneEditDeliveryMethod(editing): void {
        if(editing.editingSkuDesc === false) {
          editing.editingSkuDesc = true;
        } else if (editing.editingSkuDesc === true){
          editing.editingSkuDesc = false;
        }

        }

    }
