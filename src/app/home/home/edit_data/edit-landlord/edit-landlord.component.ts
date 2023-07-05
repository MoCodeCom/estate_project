import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-edit-landlord',
  templateUrl: './edit-landlord.component.html',
  styleUrls: ['./edit-landlord.component.css']
})
export class EditLandlordComponent implements OnInit, OnDestroy {
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping,
    private dbService:db
    ){}

    @Input() closeForm:boolean; //form landlord page true/false
    @Input() selectedClient:any; //from landlord page object data
    @Output() close = new EventEmitter<void>();

    /* --- Landlord data --- */
  @ViewChild('firstname') firstnameRef:ElementRef;
  @ViewChild('lastname') lastnameRef:ElementRef;
  @ViewChild('address') addressRef:ElementRef;
  @ViewChild('postcode') postcodeRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('phone') phoneRef:ElementRef;
  @ViewChild('details') detailsRef:ElementRef;
  /* --- End landlord data ---*/


    //client data
    landlord:any;
    newlandlord:any;
    postcodeNotExist:boolean = false;

  ngOnInit(): void {
    this.landlord = this.selectedClient;
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
      this.newlandlord = {
        id:this.selectedClient.id,
        firstname:this.firstnameRef.nativeElement.value.toLowerCase(),
        lastname:this.lastnameRef.nativeElement.value.toLowerCase(),
        address:this.addressRef.nativeElement.value.toLowerCase(),
        postcode:this.postcodeRef.nativeElement.value.toUpperCase(),
        email:this.emailRef.nativeElement.value.toLowerCase(),
        phone:this.phoneRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      console.log(this.newlandlord);
      console.log(this.landlord);
      this.dbService.updateData(this.landlord,this.newlandlord,'landlordDb');
      //console.log(form.value);

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
