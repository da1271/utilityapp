import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sku-description-update',
  templateUrl: './sku-description-update.component.html',
  styleUrls: ['./sku-description-update.component.css']
})
export class SkuDescriptionUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private datalistService: DatalistService) {
              }
  add_sku_description = new FormControl();
  skuDesc = new FormControl();
  newskuDesc = new FormControl();

  rows = [];
  skuDescs : any;
  registerForm: FormGroup;
  editForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      add_sku_description: this.add_sku_description
});
    this.editForm = this.fb.group({
      skuDesc: this.skuDesc,
      newskuDesc: this.newskuDesc
    });
    this.datalistService.getSkuDescription().subscribe(data => {
      if (data.success === false) {
        if (data.errcode) {
          console.log(data.errcode)
        }
       // this.toastr.error(data.message);
      } else {
        this.skuDescs = data.data[0].datalist.sku_description;
        //this.populateForm(this.user);
        console.log(data.data[0].datalist.sku_description);
      }
});
  }

  addButton(formdata: any): void {
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
removeButton(sku: any): void {
  this.datalistService.removeSkuDesc(sku)
    .subscribe(data => {
      if (data.success === false) {
      } else {
        this.ngOnInit();
      }
      this.editForm.reset();
    });
}
updateButton(skuDesc, newskuDesc): void {
  console.log(skuDesc)
  console.log(newskuDesc)
this.datalistService.updateSkuDesc(skuDesc, newskuDesc.newskuDesc)
  .subscribe(data => {
    if (data.success === false) {
    } else {
      this.ngOnInit();
    }
    this.editForm.reset();
  });
}

}
