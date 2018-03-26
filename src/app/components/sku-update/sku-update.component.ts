import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sku-update',
  templateUrl: './sku-update.component.html',
  styleUrls: ['./sku-update.component.css']
})
export class SkuUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private datalistService: DatalistService) {
              }
  add_sku = new FormControl();
  add_sku_description = new FormControl();
  add_product_fragrance = new FormControl();
  sku = new FormControl();
  newsku = new FormControl();
  skuDesc = new FormControl();
  newskuDesc = new FormControl();
  product_frag = new FormControl();
  newProductFrag = new FormControl();
  rows = [];
  newArray = [];
  k = [];
skus : any;
editing : any;
product_frags: any;
skuDescs : any;
sku_descs : any;
  registerForm: FormGroup;
  editFormSku: FormGroup;
  editFormSkuDesc: FormGroup;
  prodForm: FormGroup;
  editFormProd: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
          add_sku: this.add_sku,
          add_sku_description: this.add_sku_description
    });
        this.editFormSku = this.fb.group({
          sku: this.sku,
          newsku: this.newsku
    });
    this.editFormSkuDesc = this.fb.group({
      skuDesc: this.skuDesc,
      newskuDesc: this.newskuDesc
    });
    this.editFormProd = this.fb.group({
      product_frag: this.product_frag,
      newProductFrag: this.newProductFrag
    });
    this.prodForm = this.fb.group({
      add_product_fragrance: this.add_product_fragrance
    });
    this.datalistService.getSku().subscribe(data => {
      if (data.success === false) {
        if (data.errcode) {
        }
      } else {
        this.newArray = [];
        this.skus = data.data[0].datalist.sku;
        this.product_frags = data.data[0].datalist.product_fragrance
        this.sku_descs = data.data[0].datalist.sku_description;
        var s = this.skus;
        var d = this.sku_descs;
        var p = this.product_frags;
        for (var _i = 0; _i < s.length; _i++) {
          var editingSkuDesc;
          var editingSku;
          var editingProd;
          this.newArray.push({
            skus: s[_i],
            sku_descs: d[_i],
            product_fragrances: p[_i],
            editingSkuDesc: false,
            editingSku: false,
            editingProd: false
              });
        }
      }
});

  }

  addButtonSku(formdata: any): void {
let access_list = [];
console.log(formdata)
  if (this.registerForm.dirty && this.registerForm.valid) {

    this.datalistService.addSku(formdata)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.registerForm.reset();
      });
  }
}
addButtonSkuDesc(formdata: any): void {

  let access_list = [];

    if (this.registerForm.dirty && this.registerForm.valid) {

      this.datalistService.addSkuDescription(formdata)
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
  addButtonFrag(formdata: any): void {
    let access_list = [];
    console.log(formdata)
      if (this.prodForm.dirty && this.prodForm.valid) {

        this.datalistService.addProductFragrance(formdata)
          .subscribe(data => {
            if (data.success === false) {
              // this.toastr.error(data.message);
            } else {
              console.log(data);
              this.ngOnInit();

            }
            this.prodForm.reset();
          });
      }
    }
  removeButton(sku: any): void {
    this.datalistService.removeSku(sku)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editFormSku.reset();
      });
}
updateButtonSku(sku, newsku): void {
  console.log(sku)
  console.log(newsku)
  this.datalistService.updateSku(sku, newsku.newsku)
    .subscribe(data => {
      if (data.success === false) {
      } else {
        this.ngOnInit();
      }
      this.editFormSku.reset();
    });
}
updateButtonSkuDesc(skuDesc, newskuDesc): void {
  console.log(skuDesc)
  console.log(newskuDesc)
this.datalistService.updateSkuDesc(skuDesc, newskuDesc.newskuDesc)
  .subscribe(data => {
    if (data.success === false) {
    } else {
      this.ngOnInit();
    }
    this.editFormSkuDesc.reset();
  });
}
updateButtonProd(product_frag, formdata): void {
  console.log(product_frag)
  console.log(formdata)
this.datalistService.updateProductFragrance(product_frag, formdata.newProductFrag)
  .subscribe(data => {
    if (data.success === false) {
    } else {
      this.ngOnInit();
    }
    this.editFormProd.reset();
  });
}
doubleClickSkuDesc(editing): void {
if(editing.editingSkuDesc === false) {
  editing.editingSkuDesc = true;
} else if (editing.editingSkuDesc === true){
  editing.editingSkuDesc = false;
}
this.editFormSkuDesc.get('newskuDesc').setValue(editing.sku_descs);

}
doubleClickProd(editing): void {
  if(editing.editingProd === false) {
    editing.editingProd = true;
  } else if (editing.editingProd === true){
    editing.editingProd = false;
  }
  this.editFormProd.get('newProductFrag').setValue(editing.product_fragrances);

  }

doubleClickSku(editing): void {
  if(editing.editingSku === false) {
    editing.editingSku = true;
  } else if (editing.editingSku === true){
    editing.editingSku = false;
  }
  this.editFormSku.get('newsku').setValue(editing.skus);

  }
  doneEditSku(editing): void {
    if(editing.editingSku === false) {
      editing.editingSku = true;
    } else if (editing.editingSku === true){
      editing.editingSku = false;
    }

    }
    doneEditProd(editing): void {
      if(editing.editingProd === false) {
        editing.editingProd = true;
      } else if (editing.editingProd === true){
        editing.editingProd = false;
      }

      }
doneEditSkuDesc(editing): void {
  if(editing.editingSkuDesc === false) {
    editing.editingSkuDesc = true;
  } else if (editing.editingSkuDesc === true){
    editing.editingSkuDesc = false;
  }

  }


}
