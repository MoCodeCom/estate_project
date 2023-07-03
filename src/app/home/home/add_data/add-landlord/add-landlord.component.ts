import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';
import { IlandlordProp } from '../../models/landlord';

@Component({
  selector: 'app-add-landlord',
  templateUrl: './add-landlord.component.html',
  styleUrls: ['./add-landlord.component.css']
})
export class AddLandlordComponent implements OnInit,OnDestroy{
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping,
    private dbService:db
    ){}
  ngOnInit(): void {

  }
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  //@ViewChild('postcode') postcodeRef:ElementRef;

  /* --- Landlord data --- */
  @ViewChild('firstname') firstnameRef:ElementRef;
  @ViewChild('lastname') lastnameRef:ElementRef;
  @ViewChild('address') addressRef:ElementRef;
  @ViewChild('postcode') postcodeRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('phone') phoneRef:ElementRef;
  @ViewChild('details') detailsRef:ElementRef;
  /* --- End landlord data ---*/
  postcodeNotExist:boolean = false;
  landlord:any;



  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
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


      this.landlord = {
        firstname:this.firstnameRef.nativeElement.value,
        lastname:this.lastnameRef.nativeElement.value,
        address:this.postcodeRef.nativeElement.value,
        postcode:this.postcodeRef.nativeElement.value,
        email:this.emailRef.nativeElement.value,
        phone:this.phoneRef.nativeElement.value,
        detail:this.detailsRef.nativeElement.value
      }
      //console.log(this.landlord);
      this.dbService.addLandlord(this.landlord).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      });

      this.onClose();
    }
  }
}
