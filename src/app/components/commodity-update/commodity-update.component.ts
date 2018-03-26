import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-commodity-update',
  templateUrl: './commodity-update.component.html',
  styleUrls: ['./commodity-update.component.css']
})
export class CommodityUpdateComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_commodity = new FormControl();
      commodity = new FormControl();
      newCommodity = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      commodities : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_commodity: this.add_commodity
    });
    this.editForm = this.fb.group({
      commodity: this.commodity,
      newCommodity: this.newCommodity
    });
        this.datalistService.getCommodity().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.commodities = data.data[0].datalist.commodity;
            this.newArray = [];
            var m = this.commodities;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            commodity:  m[_i],
                            commodityEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.commodity);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addCommodity(formdata)
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
      this.datalistService.removeCommodity(sku)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(commodity, newCommodity): void {
    this.datalistService.updateCommodity(commodity, newCommodity.newCommodity)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickCommodity(editing): void {
      console.log(editing)
      if(editing.commodityEdit === false) {
        editing.commodityEdit = true;
      } else if (editing.commodityEdit === true){
        editing.commodityEdit = false;
      }
      this.editForm.get('newCommodity').setValue(editing.commodity);
  
      }
      doneEditCommdotiy(editing): void {
        if(editing.commodityEdit === false) {
          editing.commodityEdit = true;
        } else if (editing.commodityEdit === true){
          editing.commodityEdit = false;
        }
  
        }

    }
