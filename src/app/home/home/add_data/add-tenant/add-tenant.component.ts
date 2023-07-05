import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnDestroy, OnInit{
  @Input() closeForm:boolean;
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
  postcodeNotExist:boolean = false;
  propertyTableList = [];
  addressList = [];
  tenant:any;



  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data,
    private mapingService: maping,
    private dbService:db
    ){
      this.propertyTableList = this.dataService.propertyData();
    }

  ngOnInit(): void {
    this.addressList;
  }


  onSelected(data){
    this.addressList = [];
    this.propertyTableList.forEach(element => {
      if(element.Postcode === data){
        this.addressList.push(element.Address);
      }
    });
  }



  async onSubmit(form: NgForm){
    this.postcodeNotExist= false;
    let boolPostcode = await this.mapingService.checkPostcode(this.prepostcodeRef.nativeElement.value);

    // to check postcode if it is undefind not accepted
    if(boolPostcode === undefined){
      console.log('this is undefined value');
      this.prepostcodeRef.nativeElement.value = '';
      this.postcodeNotExist = true;
    }else{
      this.tenant = {
        firstname:this.firstnameRef.nativeElement.value.toLowerCase(),
        lastname:this.lastnameRef.nativeElement.value.toLowerCase(),
        preaddress:this.preaddressRef.nativeElement.value.toLowerCase(),
        curaddress:this.curaddressRef.nativeElement.value.toLowerCase(),
        prepostcode:this.prepostcodeRef.nativeElement.value.toUpperCase(),
        curpostcode:this.curpostcodeRef.nativeElement.value.toUpperCase(),
        email:this.emailRef.nativeElement.value.toLowerCase(),
        phone:this.phoneRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      this.dbService.addData(this.tenant,'tenantDb').then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      });
      this.onClose();
  }
 }

 onClose(){
  this.ngOnDestroy();
}

ngOnDestroy(): void {
  this.elementRef.nativeElement.remove();
  this.close.emit()
}
}
