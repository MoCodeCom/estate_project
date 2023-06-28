import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';
import { maping } from '../../services/maping.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnDestroy, OnInit{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('prepostcode') postcodeRef:ElementRef;
  postcodeNotExist:boolean = false;
  propertyTableList = [];
  addressList = [];



  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data,
    private mapingService: maping
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
