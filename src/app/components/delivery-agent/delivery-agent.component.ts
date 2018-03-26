import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../../datalist.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-delivery-agent',
  templateUrl: './delivery-agent.component.html',
  styleUrls: ['./delivery-agent.component.css']
})
export class DeliveryAgentComponent implements OnInit {

      constructor(private fb: FormBuilder,
                  private datalistService: DatalistService) {
                  }
      add_delivery_agent = new FormControl();
      delivery_agent = new FormControl();
      newDeliveryAgent = new FormControl();

      rows = [];
      newArray = [];
      skus : any;
      delivery_agents : any;
      registerForm: FormGroup;
      editForm: FormGroup;

      ngOnInit() {
        this.registerForm = this.fb.group({
          add_delivery_agent: this.add_delivery_agent
    });
    this.editForm = this.fb.group({
      delivery_agent: this.delivery_agent,
      newDeliveryAgent: this.newDeliveryAgent
    });
        this.datalistService.getDeliveryAgent().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              console.log(data.errcode)
            }
           // this.toastr.error(data.message);
          } else {
            this.delivery_agents = data.data[0].datalist.delivery_agent;
            this.newArray = [];
            var m = this.delivery_agents;
                       for (var _i = 0; _i < m.length; _i++) {
                          this.newArray.push({
                            delivery_agents:  m[_i],
                            delivery_agentEdit: false
                              });console.log(this.newArray)
                   }
            //this.populateForm(this.user);
            console.log(data.data[0].datalist.delivery_agent);
          }
    });
      }

      addButton(formdata: any): void {
    let access_list = [];

      if (this.registerForm.dirty && this.registerForm.valid) {

        this.datalistService.addDeliveryAgent(formdata)
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
    removeButton(delivery_agent: any): void {
      this.datalistService.removeDeliveryAgent(delivery_agent)
        .subscribe(data => {
          if (data.success === false) {
          } else {
            this.ngOnInit();
          }
          this.editForm.reset();
        });
    }
    updateButton(delivery_agent, newDeliveryAgent): void {
    this.datalistService.updateDeliveryAgent(delivery_agent, newDeliveryAgent.newDeliveryAgent)
      .subscribe(data => {
        if (data.success === false) {
        } else {
          this.ngOnInit();
        }
        this.editForm.reset();
      });
    }

    doubleClickDeliveryAgent(editing): void {
      console.log(editing)
      if(editing.delivery_agentEdit === false) {
        editing.delivery_agentEdit = true;
      } else if (editing.delivery_agentEdit === true){
        editing.delivery_agentEdit = false;
      }
      this.editForm.get('newDeliveryAgent').setValue(editing.delivery_agents);
  
      }
      doneEditDeliveryAgent(editing): void {
        if(editing.delivery_agentEdit === false) {
          editing.delivery_agentEdit = true;
        } else if (editing.delivery_agentEdit === true){
          editing.delivery_agentEdit = false;
        }
  
        }

    }
