import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { maping } from '../../services/maping.service';

@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.css']
})
export class AddOtherComponent implements OnInit,OnDestroy{
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
