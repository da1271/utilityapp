import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-rejected-reason-description',
  templateUrl: './rejected-reason-description.component.html',
  styleUrls: ['./rejected-reason-description.component.css']
})
export class RejectedReasonDescriptionComponent implements OnInit {

        constructor(private fb: FormBuilder,
                    private datalistService: DatalistService) {
                    }
        add_rejected_reason_desc = new FormControl();
        reject_reason_desc = new FormControl();
        newRejectedReasonDesc = new FormControl();

        rows = [];
        skus : any;
        reject_reason_descs : any;
        registerForm: FormGroup;
        editForm: FormGroup;

        ngOnInit() {
          this.registerForm = this.fb.group({
            add_rejected_reason_desc: this.add_rejected_reason_desc
      });
      this.editForm = this.fb.group({
        reject_reason_desc: this.reject_reason_desc,
        newRejectedReasonDesc: this.newRejectedReasonDesc
      });
          this.datalistService.getRejectedReasonDesc().subscribe(data => {
            if (data.success === false) {
              if (data.errcode) {
                console.log(data.errcode)
              }
             // this.toastr.error(data.message);
            } else {
              this.reject_reason_descs = data.data[0].datalist.rejected.reason_description;
              //this.populateForm(this.user);
              console.log(data.data[0].datalist.rejected.reason_description);
            }
      });
        }

        addButton(formdata: any): void {
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
      removeButton(reject_reason_desc: any): void {
        this.datalistService.removeRejectedReasonDesc(reject_reason_desc)
          .subscribe(data => {
            if (data.success === false) {
            } else {
              this.ngOnInit();
            }
            this.editForm.reset();
          });
      }
      updateButton(reject_reason_desc, newRejectedReasonDesc): void {
      this.datalistService.updateRejectReasonDesc(reject_reason_desc, newRejectedReasonDesc.newRejectedReasonDesc)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
      }


      }
