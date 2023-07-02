import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { demo_data } from '../../../services/demo_data.service';

@Component({
  selector: 'app-frtenant',
  templateUrl: './frtenant.component.html',
  styleUrls: ['./frtenant.component.css']
})
export class FrtenantComponent implements OnInit,OnDestroy {

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
    this.tenantData = this.dataService.moneyData();
    for(let i of this.tenantData){
      if(i['position'].toLowerCase() === 'tenant'){
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

