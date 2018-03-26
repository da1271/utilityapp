import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-currency-update',
  templateUrl: './currency-update.component.html',
  styleUrls: ['./currency-update.component.css']
})
export class CurrencyUpdateComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private datalistService: DatalistService) {
                }
    add_currency = new FormControl();
    currency = new FormControl();
    newCurrency = new FormControl();

    rows = [];
    newArray = [];
    skus : any;
    currencys : any;
    registerForm: FormGroup;
    editForm: FormGroup;

    searchViewToggle: boolean = true;

    ngOnInit() {
      this.registerForm = this.fb.group({
        add_currency: this.add_currency
  });
  this.editForm = this.fb.group({
    currency: this.currency,
    newCurrency: this.newCurrency
  });
      this.datalistService.getCurrency().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            console.log(data.errcode)
          }
         // this.toastr.error(data.message);
        } else {
          this.currencys = data.data[0].datalist.currency;
          this.newArray = [];
          var m = this.currencys;
                     for (var _i = 0; _i < m.length; _i++) {
                        this.newArray.push({
                          currencys:  m[_i],
                          currencyEdit: false
                            });console.log(this.newArray)
                 }
          //this.populateForm(this.user);
          console.log(data.data[0].datalist.currency);
        }
  });
    }

    addButton(formdata: any): void {
  let access_list = [];

    if (this.registerForm.dirty && this.registerForm.valid) {

      this.datalistService.addCurrency(formdata)
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
  removeButton(currency: any): void {
    this.datalistService.removeCurrency(currency)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
  }
  updateButton(currency, newCurrency): void {
    console.log(currency)
    console.log(newCurrency)
  this.datalistService.updateCurrency(currency, newCurrency.newCurrency)
    .subscribe(data => {
      if (data.success === false) {
      } else {
        this.ngOnInit();
      }
      this.editForm.reset();
    });
  }
  doubleClickCurrency(editing): void {
    console.log(editing)
    if(editing.currencyEdit === false) {
      editing.currencyEdit = true;
    } else if (editing.currencyEdit === true){
      editing.currencyEdit = false;
    }
    this.editForm.get('newCurrency').setValue(editing.currencys);

    }
    doneEditCurrency(editing): void {
      if(editing.currencyEdit === false) {
        editing.currencyEdit = true;
      } else if (editing.currencyEdit === true){
        editing.currencyEdit = false;
      }

      }

  }
