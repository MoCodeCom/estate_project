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


  fromDATE:any;
  toDATE:any;
  name:any;
  landlordName=[];
  landlordData=[];
  ReportTotalAmont = 0;

  ngOnInit(): void {
    this.getLandlordData();

  }

  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;
    //let originContents = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
  }

  printEle(ele:ElementRef){
    console.log(ele.nativeElement.value);
  }

  resetReport(){
    this.fromDATE = null;
    this.toDATE = null;
    this.name = null;
  }

  getLandlordData(){
    this.landlordData = this.dataService.moneyData();
    for(let i of this.landlordData){
      if(i['position'].toLowerCase() === 'landlord'){
        this.landlordName.push(i.name);
      }
    }
  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }


}
