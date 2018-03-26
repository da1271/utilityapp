import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-label-type-update',
  templateUrl: './label-type-update.component.html',
  styleUrls: ['./label-type-update.component.css']
})
export class LabelTypeUpdateComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_label_type = new FormControl();
      label_type = new FormControl();
      newLabelType = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      label_types : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_label_type: this.add_label_type
    });
    this.editForm = this.fb.group({
      label_type: this.label_type,
      newLabelType: this.newLabelType
    });
        this.datalistService.getLabelType().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.label_types = data.data[0].datalist.label_type;
            this.newArray = [];
            var m = this.label_types;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            label_types:  m[_i],
                            label_typesEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.label_type);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addLabelType(formdata)
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
      this.datalistService.removeLabelType(sku)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(label_type, newLabelType): void {
    this.datalistService.updateLabelType(label_type, newLabelType.newLabelType)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickLabelType(editing): void {
      console.log(editing)
      if(editing.label_typesEdit === false) {
        editing.label_typesEdit = true;
      } else if (editing.label_typesEdit === true){
        editing.label_typesEdit = false;
      }
      this.editForm.get('newLabelType').setValue(editing.label_types);
  
      }
      doneEditLabelType(editing): void {
        if(editing.label_typesEdit === false) {
          editing.label_typesEdit = true;
        } else if (editing.label_typesEdit === true){
          editing.label_typesEdit = false;
        }
  
        }

    }
