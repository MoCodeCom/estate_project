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
    this.generateInvoiceNo();
    console.log(form.value);
    console.log(this.transactionList);
    console.log(this.totalAmountValue);
    console.log(this.invoiceNo);
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
    this.invoiceNo = yNo.getSeconds() + yNo.getMinutes() + yNo.getFullYear()+yNo.getFullYear()+'CP';
  }
}
