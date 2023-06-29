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

  ngOnInit(): void {
    this.getLandlordName();
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

  getLandlordName(){
    let landlord = this.dataService.landlordData();
    for(let i of landlord){
      let name = i.firstName +' '+ i.lastName;
      this.landlordName.push(name)
    }
  }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
