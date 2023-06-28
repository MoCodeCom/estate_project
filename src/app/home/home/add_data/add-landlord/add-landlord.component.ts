import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { maping } from '../../services/maping.service';

@Component({
  selector: 'app-add-landlord',
  templateUrl: './add-landlord.component.html',
  styleUrls: ['./add-landlord.component.css']
})
export class AddLandlordComponent implements OnInit,OnDestroy{
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping
    ){}
  ngOnInit(): void {

  }
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('postcode') postcodeRef:ElementRef;
  postcodeNotExist:boolean = false;



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
      console.log(boolPostcode);
      this.onClose();
    }
  }
}
