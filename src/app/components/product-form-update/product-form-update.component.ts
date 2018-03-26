import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_product_form = new FormControl();
      product_form = new FormControl();
      newProductForm = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      product_forms : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_product_form: this.add_product_form
    });
    this.editForm = this.fb.group({
      product_form: this.product_form,
      newProductForm: this.newProductForm
    });
        this.datalistService.getProductForm().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.product_forms = data.data[0].datalist.product_form;
            this.newArray = [];
            var m = this.product_forms;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            product_forms:  m[_i],
                            product_formEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.product_form);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addProductForm(formdata)
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
    removeButton(product_form: any): void {
      this.datalistService.removeProductForm(product_form)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(product_form, newProductForm): void {
    this.datalistService.updateProductForm(product_form, newProductForm.newProductForm)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickProductForm(editing): void {
      console.log(editing)
      if(editing.product_formEdit === false) {
        editing.product_formEdit = true;
      } else if (editing.product_formEdit === true){
        editing.product_formEdit = false;
      }
      this.editForm.get('newProductForm').setValue(editing.product_forms);
  
      }
      doneEditProductForm(editing): void {
        if(editing.product_formEdit === false) {
          editing.product_formEdit = true;
        } else if (editing.product_formEdit === true){
          editing.product_formEdit = false;
        }
  
        }

    }
