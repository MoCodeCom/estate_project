import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';
import { db } from '../../services/db.service';
import { maping } from '../../services/maping.service';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnDestroy, OnInit{

  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data,
    private mapingService:maping,
    private dbService:db
    ){
      this.propertyTableList = this.dataService.propertyData();
    }
  ngOnInit(): void {
    this.tenant = this.selectedClient;
  }

    @Input() closeForm:boolean; //form tenant page true/false
    @Input() selectedClient:any; //from tenant page object data
    @Output() close = new EventEmitter<void>();


  /* --- Landlord data --- */
  @ViewChild('firstname') firstnameRef:ElementRef;
  @ViewChild('lastname') lastnameRef:ElementRef;
  @ViewChild('preaddress') preaddressRef:ElementRef;
  @ViewChild('curaddress') curaddressRef:ElementRef;
  @ViewChild('prepostcode') prepostcodeRef:ElementRef;
  @ViewChild('curpostcode') curpostcodeRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('phone') phoneRef:ElementRef;
  @ViewChild('details') detailsRef:ElementRef;
  /* --- End landlord data ---*/

    //client data
    //ClientDetails:any;
    addressList = [];
    propertyTableList = [];
    ownerNameList = [];
    showDefault:boolean=true;
    /**-------------------------- */
    newtenant:any;
    tenant:any;
    postcodeNotExist:boolean = false;

  async onSubmit(form: NgForm){

    this.postcodeNotExist= false;
    let boolPostcode = await this.mapingService.checkPostcode(this.prepostcodeRef.nativeElement.value);
    // to check postcode if it is undefind not accepted
    if(boolPostcode === undefined){
      console.log('this is undefined value');
      this.prepostcodeRef.nativeElement.value = '';
      this.postcodeNotExist = true;
    }else{
      this.newtenant = {
        id:this.selectedClient.id,
        firstname:this.firstnameRef.nativeElement.value.toLowerCase(),
        lastname:this.lastnameRef.nativeElement.value.toLowerCase(),
        preaddress:this.preaddressRef.nativeElement.value.toLowerCase(),
        prepostcode:this.prepostcodeRef.nativeElement.value.toUpperCase(),
        curaddress:this.curaddressRef.nativeElement.value.toLowerCase(),
        curpostcode:this.curpostcodeRef.nativeElement.value.toUpperCase(),
        email:this.emailRef.nativeElement.value.toLowerCase(),
        phone:this.phoneRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      console.log(this.newtenant);
      console.log(this.tenant);
      this.dbService.updateData(this.tenant,this.newtenant,'tenantDb');

      this.onClose();
  }
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


  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
