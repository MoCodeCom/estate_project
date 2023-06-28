import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';
import { maping } from '../../services/maping.service';
import { __asyncValues, __values } from 'tslib';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnDestroy{

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('postcode') postcodeRef:ElementRef;


  propertyTableList = [];
  landlordList = [];
  postcodeNotExist:boolean = false;

  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data,
    private mapingService:maping
    ){}

  ngOnInit(): void {
    this.landlordList = this.dataService.landlordData();
    this.propertyTableList = this.dataService.propertyData();
  }

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
