import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.css']
})
export class AddOtherComponent implements OnInit,OnDestroy{
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping,
    private dbService:db
    ){}
  ngOnInit(): void {}
  @Input() closeForm:boolean;
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
  postcodeNotExist:boolean = false;
  other:any;



  async onSubmit(form: NgForm){
    this.postcodeNotExist= false;
    let boolPostcode = await this.mapingService.checkPostcode(this.postcodeRef.nativeElement.value);

    // to check postcode if it is undefind not accepted
    if(boolPostcode === undefined){
      console.log('this is undefined value');
      this.postcodeRef.nativeElement.value = '';
      this.postcodeNotExist = true;
    }else{
      this.other = {
        name:this.nameRef.nativeElement.value.toLowerCase(),
        sector:this.sectorRef.nativeElement.value.toLowerCase(),
        services:this.servicesRef.nativeElement.value.toLowerCase(),
        address:this.addressRef.nativeElement.value.toLowerCase(),
        postcode:this.postcodeRef.nativeElement.value.toUpperCase(),
        email:this.emailRef.nativeElement.value.toLowerCase(),
        phone:this.phoneRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      this.dbService.addData(this.other,'otherDb').then(res =>{
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
