import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Routes, Router }  from '@angular/router';


@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.css']
})
export class CountryUpdateComponent implements OnInit {


      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {}
      add_country = new FormControl();
      add_country_code = new FormControl();
      country = new FormControl();
      country_code = new FormControl();
      newCountry = new FormControl();
      rows = [];
      skus : any;
      keys : any;
      registerForm: FormGroup;
      editForm: FormGroup;
        newArray = [];

      ngOnInit() {

        this.registerForm = this.fb.group({
          add_country: this.add_country,
          add_country_code: this.add_country_code
    });
    this.editForm = this.fb.group({
      country: this.country,
      country_code: this.country_code,
      newCountry: this.newCountry
    });
        this.datalistService.getCountry().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.skus = Object.values(data.data[0].datalist.country[0]);
            this.keys = Object.keys(data.data[0].datalist.country[0]) ;
            var k = this.keys;
            var s = this.skus;
            var i = k.length

            this.newArray = [];

            for (var _i = 0; _i < k.length; _i++) {
              this.newArray.push({
                country_code: k[_i],
                country: s[_i],
                country_code_edit: false
                  });
       }console.log(_i)
            console.log(this.newArray);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];
    console.log(formdata)
      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addCountry(formdata)
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
    removeButton(country, country_code): void {
      this.datalistService.removeCountry(country, country_code)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }

    updateButton(country, country_code, formdata): void {
      console.log(formdata)
      console.log(country)
    this.datalistService.updateCountry(country, country_code, formdata)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickCountry(editing): void {
      if(editing.country_code_edit === false) {
        editing.country_code_edit = true;
      } else if (editing.country_code_edit === true){
        editing.country_code_edit = false;
      }
      this.editForm.get('newCountry').setValue(editing.country);

      }
    doneEditCountry(editing): void {
      if(editing.country_code_edit === false) {
        editing.country_code_edit = true;
      } else if (editing.country_code_edit === true){
        editing.country_code_edit = false;
      }

      }


    }
