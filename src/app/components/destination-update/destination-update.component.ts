import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-destination-update',
  templateUrl: './destination-update.component.html',
  styleUrls: ['./destination-update.component.css']
})
export class DestinationUpdateComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_destination = new FormControl();
      destination = new FormControl();
      newDestination = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      destinations : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_destination: this.add_destination
    });
    this.editForm = this.fb.group({
      destination: this.destination,
      newDestination: this.newDestination
    });
        this.datalistService.getDestination().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.destinations = data.data[0].datalist.destination;
            this.newArray = [];
            var m = this.destinations;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            destinations:  m[_i],
                            destinationEdit: false
                              });console.log(this.newArray)
                   }
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addDestination(formdata)
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
    removeButton(destination: any): void {
      this.datalistService.removeDestination(destination)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(destination, newDestination): void {
    this.datalistService.updateDestination(destination, newDestination.newDestination)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }
    doubleClickDestination(editing): void {
      console.log(editing)
      if(editing.destinationEdit === false) {
        editing.destinationEdit = true;
      } else if (editing.destinationEdit === true){
        editing.destinationEdit = false;
      }
      this.editForm.get('newDestination').setValue(editing.destinations);
  
      }
      doneEditDestination(editing): void {
        if(editing.destinationEdit === false) {
          editing.destinationEdit = true;
        } else if (editing.destinationEdit === true){
          editing.destinationEdit = false;
        }
  
        }

    }
