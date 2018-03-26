import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-source-update',
  templateUrl: './source-update.component.html',
  styleUrls: ['./source-update.component.css']
})
export class SourceUpdateComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_source = new FormControl();
      source = new FormControl();
      newSource = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      sources : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_source: this.add_source
    });
    this.editForm = this.fb.group({
      source: this.source,
      newSource: this.newSource
    });
        this.datalistService.getSource().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.sources = data.data[0].datalist.source;
            this.newArray = [];
            var m = this.sources;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            sources:  m[_i],
                            sourceEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.source);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addSource(formdata)
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
    removeButton(source: any): void {
      this.datalistService.removeSource(source)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(source, newSource): void {
    this.datalistService.updateSource(source, newSource.newSource)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickSource(editing): void {
      console.log(editing)
      if(editing.sourceEdit === false) {
        editing.sourceEdit = true;
      } else if (editing.sourceEdit === true){
        editing.sourceEdit = false;
      }
      this.editForm.get('newSource').setValue(editing.sources);
  
      }
      doneEditSource(editing): void {
        if(editing.sourceEdit === false) {
          editing.sourceEdit = true;
        } else if (editing.sourceEdit === true){
          editing.sourceEdit = false;
        }
  
        }

    }
