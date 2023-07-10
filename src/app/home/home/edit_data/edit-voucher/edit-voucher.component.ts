import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { NgForm } from '@angular/forms';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrls: ['./edit-voucher.component.css']
})
export class EditVoucherComponent  implements OnDestroy, OnInit{

  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data,
    private dbService:db
    ){
      this.propertyTableList = this.dataService.moneyData();
      this.landlordList = this.dataService.landlordData();
      this.tenantsList = this.dataService.tenantData();

      this.addressList;
    }



  ngOnInit(): void {
  }
    @Input() closeForm:boolean; //form tenant page true/false
    @Input() selectedClient:any; //from tenant page object data
    @Output() close = new EventEmitter<void>();

      //transaction details
    @ViewChild('amount', {static:true}) transactionAmount:ElementRef;
    @ViewChild('description',{static:true}) transactionDescription:ElementRef;
    @ViewChild('typeOfTransaction',{static:true}) transactionType:ElementRef;
    @ViewChild('about',{static:true}) aboutRef:ElementRef;


  //transactions list
    transactionList= [];
  //
    //client data
    propertyTableList = [];
    landlordList = [];
    tenantsList = [];
    otherList = [];
    addressList = [];
    addTransaction:boolean = false;
    totalAmountValue:any = 0;
    invoiceNo:string="";


  onSubmit(form: NgForm){
      console.log(form.valid);
      this.onClose();
  }

  /*
  onSelected(data){
    this.addressList = [];
    this.propertyTableList.forEach(element => {
      if(element.Postcode === data){
        this.addressList.push(element.Address);
      }
    });
  }*/

  onAddTransaction(){}

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

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }

}
