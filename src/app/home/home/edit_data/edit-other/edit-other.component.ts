import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { NgForm } from '@angular/forms';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-edit-other',
  templateUrl: './edit-other.component.html',
  styleUrls: ['./edit-other.component.css']
})
export class EditOtherComponent implements OnDestroy, OnInit {
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping,
    private dbService:db
    ){}

    @Input() closeForm:boolean; //form landlord page true/false
    @Input() selectedClient:any; //from landlord page object data
    @Output() close = new EventEmitter<void>();

    /* --- Landlord data --- */
  @ViewChild('name') nameRef:ElementRef;
  @ViewChild('sector') sectorRef:ElementRef;
  @ViewChild('services') servicesRef:ElementRef;
  @ViewChild('address') addressRef:ElementRef;
  @ViewChild('postcode') postcodeRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('phone') phoneRef:ElementRef;
  @ViewChild('details') detailsRef:ElementRef;
  /* --- End landlord data ---*/

  //client data
  other:any;
  newother:any;
  postcodeNotExist:boolean = false;
  //ClientDetails:any;

  ngOnInit(): void {
    this.other = this.selectedClient;
  }


  async onSubmit(form: NgForm){
    this.postcodeNotExist= false;
    let boolPostcode = await this.mapingService.checkPostcode(this.postcodeRef.nativeElement.value);

    // to check postcode if it is undefind not accepted
    if(boolPostcode === undefined){
      console.log('this is undefined value');
      this.postcodeRef.nativeElement.value = '';
      this.postcodeNotExist = true;
    }else{
      this.newother = {
        name:this.nameRef.nativeElement.value.toLowerCase(),
        sector:this.sectorRef.nativeElement.value.toLowerCase(),
        services:this.servicesRef.nativeElement.value.toLowerCase(),
        address:this.addressRef.nativeElement.value.toLowerCase(),
        postcode:this.postcodeRef.nativeElement.value.toUpperCase(),
        email:this.emailRef.nativeElement.value.toLowerCase(),
        phone:this.phoneRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      console.log(this.newother);
      console.log(this.other);
      this.dbService.updateData(this.other,this.newother,'otherDb');
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
