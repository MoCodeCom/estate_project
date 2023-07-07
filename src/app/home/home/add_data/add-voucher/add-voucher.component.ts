import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { NgForm } from '@angular/forms';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.css']
})
export class AddVoucherComponent implements OnDestroy, OnInit{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();

  /* --- money data --- */
  @ViewChild('position',{static:true}) positionRef:ElementRef;
  @ViewChild('date', {static:true}) dateRef:ElementRef;

  @ViewChild('name',{static:true}) nameRef:ElementRef;
  @ViewChild('nameTenant',{static:true}) nametenantRef:ElementRef;
  @ViewChild('nameOther',{static:true}) nameotherRef:ElementRef;
  @ViewChild('nameLandlord',{static:true}) namelandlordRef:ElementRef;

  @ViewChild('about',{static:true}) aboutRef:ElementRef;
  @ViewChild('totalAmount',{static:true}) totalamountRef:ElementRef;
  @ViewChild('typeOfPayment',{static:true}) typeofpaymentRef:ElementRef;


  /* --- End money data ---*/


  //transaction details
  /*
  @ViewChild('amount', {static:false}) transactionAmount:ElementRef;
  @ViewChild('description',{static:false}) transactionDescription:ElementRef;
  @ViewChild('typeOfTransaction',{static:false}) transactionType:ElementRef;
*/
  //transactions list
  transactionList= [];
  //
  propertyTableList = [];
  landlordList = [];
  tenantList = [];
  otherList = [];

  //addressList = [];
  addTransaction:boolean = false;
  totalAmountValue:any = 0;
  invoiceNo:string="";


  money:any;
  loading:boolean = false;

  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data,
    private dbService:db
    ){}

  ngOnInit(): void {
    //this.propertyTableList = this.dataService.moneyData();
    this.getLandlord();
    this.getTenant();
    this.getOther();

    //this.landlordList = this.dataService.landlordData();
    //this.tenantsList = this.dataService.tenantData();
    //this.otherList = this.dataService.tenantData();
    //this.addressList;
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

  onSubmit(form: NgForm){
    this.generateInvoiceNo();

    this.money = {
      position:this.positionRef.nativeElement.value.toLowerCase(),
      date:this.dateRef.nativeElement.value.toLowerCase(),
      name:form.value.name.toLowerCase(),
      about:this.aboutRef.nativeElement.value.toLowerCase(),
      totalamount:this.totalamountRef.nativeElement.value.toUpperCase(),
      typeofpayment:this.typeofpaymentRef.nativeElement.value.toLowerCase(),
      trans:this.transactionList
    }

    this.dbService.addData(this.money,'moneyDb').then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });

    console.log(this.money);
    //console.log(this.transactionList);

    this.onClose();
  }

  onSubmitTransaction(form:NgForm){

    let formData = form.value;

    if(formData.typeOfTransaction === 'Pay'){
      formData.amount = formData.amount * -1;
    }
    this.transactionList.push(formData);
    let a:any = formData.amount;
    if(formData.typeOfTransaction === 'Pay'){
      let result = this.totalAmountValue + a;
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
/* ----- to call landlord, tenant, other list ---- */
  async getLandlord(){
    this.loading = true;
    await this.dbService.getData('landlordDb').then(
      res =>{
        this.landlordList  =[];
        res.forEach(element =>{
          this.landlordList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  async getTenant(){
    this.loading = true;
    await this.dbService.getData('tenantDb').then(
      res =>{
        this.tenantList  =[];
        res.forEach(element =>{
          this.tenantList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  async getOther(){
    this.loading = true;
    await this.dbService.getData('otherDb').then(
      res =>{
        this.otherList  =[];
        res.forEach(element =>{
          this.otherList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  /* ------ End ------------- */


  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
