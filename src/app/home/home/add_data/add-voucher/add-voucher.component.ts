import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild('name',{static:false}) clientName:ElementRef;
  @ViewChild('nameLandlord',{static:false}) clientName1:ElementRef;
  @ViewChild('nameTenant',{static:false}) clientName2:ElementRef;
  @ViewChild('nameOther',{static:false}) clientName3:ElementRef;

  //transaction details
  @ViewChild('amount', {static:false}) transactionAmount:ElementRef;
  @ViewChild('description',{static:false}) transactionDescription:ElementRef;
  @ViewChild('typeOfTransaction',{static:false}) transactionType:ElementRef;

  //transactions list
  transactionList= [];
  //
  propertyTableList = [];
  landlordList = [];
  tenantsList = [];
  otherList = [];
  addressList = [];
  addTransaction:boolean = false;
  totalAmountValue:any = 0;
  invoiceNo:string="";

  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data
    ){}

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

  onAddTransaction(){

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
    console.log(this.transactionList);
    console.log(this.totalAmountValue);
    this.onClose();
  }

  onSubmitTransaction(form:NgForm){
    this.transactionList.push(form.value);
    let a:any = form.value.amount;
    if(form.value.typeOfTransaction === 'Pay'){
      let result = this.totalAmountValue - a;
      this.totalAmountValue = result.toFixed(2);
    }else{

      let result = parseInt(this.totalAmountValue) + a;
      this.totalAmountValue = result;

    }
    form.reset();
  }

  generateInvoiceNo(){
    let yNo = new Date();
    let nNo = this.clientName.nativeElement.value.slice(0,2)+
              this.clientName1.nativeElement.value.slice(0,2)+
              this.clientName2.nativeElement.value.slice(0,2)+
              this.clientName3.nativeElement.value.slice(0,2);
    let NoInvoice = yNo.getSeconds() * yNo.getMinutes() + yNo.getFullYear()+nNo+yNo.getFullYear();
    console.log(NoInvoice);
  }
}
