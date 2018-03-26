import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-fragrance',
  templateUrl: './product-fragrance.component.html',
  styleUrls: ['./product-fragrance.component.css']
})
export class ProductFragranceComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_product_fragrance = new FormControl();
      product_fragrance = new FormControl();
      newProductFragrance = new FormControl();

      rows = [];
      skus : any;
      product_fragrances : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_product_fragrance: this.add_product_fragrance
    });
    this.editForm = this.fb.group({
      product_fragrance: this.product_fragrance,
      newProductFragrance: this.newProductFragrance
    });
        this.datalistService.getProductFragrance().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.product_fragrances = data.data[0].datalist.product_fragrance;
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.product_fragrance);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addProductFragrance(formdata)
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
    removeButton(product_fragrance: any): void {
      this.datalistService.removeProductFragrance(product_fragrance)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(product_fragrance, newProductFragrance): void {
    this.datalistService.updateProductFragrance(product_fragrance, newProductFragrance.newProductFragrance)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }

    }
