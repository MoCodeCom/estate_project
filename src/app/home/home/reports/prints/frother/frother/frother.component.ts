import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { demo_data } from 'src/app/home/home/services/demo_data.service';

@Component({
  selector: 'app-frother',
  templateUrl: './frother.component.html',
  styleUrls: ['./frother.component.css']
})
export class FrotherComponent implements OnInit,OnDestroy {

  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data,
    ){}

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();


  fromDATE:any;
  toDATE:any;
  name:any;
  tenantName=[];
  tenantData=[];
  ReportTotalAmont = 0;

  ngOnInit(): void {
    this.getLandlordData();

  }

  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;

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
    this.tenantData = this.dataService.moneyData();
    for(let i of this.tenantData){
      if(i['position'].toLowerCase() === 'others'){
        this.tenantName.push(i.name);
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
