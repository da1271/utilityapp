import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-rejected-reason-code',
  templateUrl: './rejected-reason-code.component.html',
  styleUrls: ['./rejected-reason-code.component.css']
})
export class RejectedReasonCodeComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_rejected_reason_code = new FormControl();
      add_rejected_reason_desc = new FormControl();
      rejected_reason_code = new FormControl();
      rejected_reason_description = new FormControl();
      newRejectedReasonCode = new FormControl();
      newRejectedReasonDesc = new FormControl();
      newArray = [];
      rows = [];
      skus : any;
      reject_reason_codes : any;
      registerForm: FormGroup;
      description: FormGroup;
      editCode: FormGroup;

      ngOnInit() {
        this.description = this.fb.group({
          // rejected_reason_description: this.rejected_reason_description,
          newRejectedReasonDesc: this.newRejectedReasonDesc
        });
        this.registerForm = this.fb.group({
          add_rejected_reason_code: this.add_rejected_reason_code,
          add_rejected_reason_desc: this.add_rejected_reason_desc
    });

    this.editCode = this.fb.group({
      rejected_reason_code: this.rejected_reason_code,
      newRejectedReasonCode: this.newRejectedReasonCode
    });

        this.datalistService.getRejectedReasonCode().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.newArray = [];
            this.reject_reason_codes = data.data[0].datalist.rejected.reason_code;
            this.rejected_reason_description = data.data[0].datalist.rejected.reason_description;

            var c = this.reject_reason_codes;
            var d = this.rejected_reason_description;
            for (var _i = 0; _i < c.length; _i++) {
              var editingSkuDesc;
              var editingSku;
              this.newArray.push({
                reason_codes: c[_i],
                reason_descriptions: d[_i],
                editingReasonCode: false,
                editingReasonDesc: false
              });
            }
          }
    });

      }

      addButtonCode(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addRejectedReasonCode(formdata)
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
    addButtonDesc(formdata: any): void {
      let access_list = [];

        if (this.registerForm.dirty && this.registerForm.valid) {

          this.datalistService.addRejectedReasonDesc(formdata)
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
    // removeButton(reject_reason_code: any): void {
    //   this.datalistService.removeRejectedReasonCode(reject_reason_code)
    //     .subscribe(data => {
    //       if (data.success === false) {
    //       } else {
    //         this.ngOnInit();
    //       }
    //       this.editForm.reset();
    //     });
    // }
    updateButtonCode(reject_reason_code, newRejectedReasonCode): void {
    this.datalistService.updateRejectReasonCode(reject_reason_code, newRejectedReasonCode.newRejectedReasonCode)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editCode.reset();
      });
    }
    updateButtonDesc(reject_reason_description, newRejectedReasonDesc): void {
      this.datalistService.updateRejectReasonDesc(reject_reason_description, newRejectedReasonDesc.newRejectedReasonDesc)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.description.reset();
        });
      }
    doubleClickCode(editing): void {
      if(editing.editingReasonCode === false) {
        editing.editingReasonCode = true;
      } else if (editing.editingReasonCode === true){
        editing.editingReasonCode = false;
      }
      this.editCode.get('newRejectedReasonCode').setValue(editing.reason_codes);

      }

    doubleClickDesc(editing): void {
      if(editing.editingReasonDesc === false) {
        editing.editingReasonDesc = true;
      } else if (editing.editingReasonDesc === true){
        editing.editingReasonDesc = false;
      }
      this.description.get('newRejectedReasonDesc').setValue(editing.reason_descriptions);

      }
      doneEditCode(editing): void {
        if(editing.editingReasonCode === false) {
          editing.editingReasonCode = true;
        } else if (editing.editingReasonCode === true){
          editing.editingReasonCode = false;
        }

        }
        doneEditDesc(editing): void {
          if(editing.editingReasonDesc === false) {
            editing.editingReasonDesc = true;
          } else if (editing.editingReasonDesc === true){
            editing.editingReasonDesc = false;
          }

          }

    }
