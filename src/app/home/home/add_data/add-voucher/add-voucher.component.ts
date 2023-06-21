import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.css']
})
export class AddVoucherComponent implements OnDestroy, OnInit{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  propertyTableList = [];
  landlordList = [];
  tenantsList = [];
  otherList = [];
  addressList = [];



  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data
    ){

    }

  ngOnInit(): void {
    this.propertyTableList = this.dataService.moneyData();
    this.landlordList = this.dataService.landlordData();
    this.tenantsList = this.dataService.tenantData();
    this.otherList = this.dataService.tenantData();
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

  onSubmit(form: NgForm){
    console.log(form.value);
    this.onClose();
  }
}
