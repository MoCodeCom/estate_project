import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { demo_data } from '../../../services/demo_data.service';

@Component({
  selector: 'app-frlandlord',
  templateUrl: './frlandlord.component.html',
  styleUrls: ['./frlandlord.component.css']
})
export class FrlandlordComponent implements OnInit,OnDestroy {

  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data,
    ){}

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('fromDate') fromdate:ElementRef;
  @ViewChild('toDate') todate:ElementRef;

  fromDATE:any;
  toDATE:any;
  name:any;
  landlordName=[];
  landlordData=[];

  ngOnInit(): void {
    this.getLandlordData();
    console.log(this.landlordData);
  }

  onClose(){
    this.ngOnDestroy();
  }

  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;
    let originContents = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
  }

  resetReport(){
    this.fromDATE = null;
    this.toDATE = null;
    this.name = null;
  }



  getLandlordData(){
    this.landlordData = this.dataService.moneyData();
    for(let i of this.landlordData){
      if(this.landlordName.includes(i.name)){
        return;
      }else{
        this.landlordName.push(i.name);
      }
    }
  }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }


}
