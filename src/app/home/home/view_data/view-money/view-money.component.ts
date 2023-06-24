import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-money',
  templateUrl: './view-money.component.html',
  styleUrls: ['./view-money.component.css']
})
export class ViewMoneyComponent implements OnInit, OnDestroy{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @Input() selectedClient:any;
  ClientDetails:any;
  transactionLength = 0;
  totalAmount = 0;

  constructor(
    private elementRef: ElementRef
    ){}


  ngOnInit(): void {
    this.onSelectedClient();
  }

  onClose(){
    this.ngOnDestroy();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
    this.transactionLength = this.ClientDetails.transaction.length;
    let trans = this.ClientDetails.transaction;
    for(let i=0; i < trans.length ;i++){
      let count = parseFloat(trans[i].amount);
      if(trans[i].type == 'pay'){
        //for receive transaction
        this.totalAmount -= count;
      }else{
        //for pay transaction
        this.totalAmount += count;
      }

    }
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }

  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;
    let originContents = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
  }

}
