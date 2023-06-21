import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnDestroy{

  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data
    ){
      this.propertyTableList = this.dataService.propertyData();
    }
    @Input() closeForm:boolean; //form tenant page true/false
    @Input() selectedClient:any; //from tenant page object data
    @Output() close = new EventEmitter<void>();
    //client data
    ClientDetails:any;
    addressList = [];
    propertyTableList = [];
    ownerNameList = [];
    showDefault:boolean=true;

  onSubmit(form: NgForm){
      console.log(form.valid);
      this.onClose();
  }

  onClose(){
    this.ngOnDestroy();
  }

  onSelected(data){
    this.addressList = [];
    this.propertyTableList.forEach(element => {
      if(element.Postcode === data){
        this.addressList.push(element.Address);
      }
    });
    this.showDefault = false;
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
