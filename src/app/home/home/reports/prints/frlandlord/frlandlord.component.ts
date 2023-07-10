import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { demo_data } from '../../../services/demo_data.service';
import { db } from '../../../services/db.service';
import { isExists } from 'date-fns';


@Component({
  selector: 'app-frlandlord',
  templateUrl: './frlandlord.component.html',
  styleUrls: ['./frlandlord.component.css']
})
export class FrlandlordComponent implements OnInit,OnDestroy {

  constructor(
    private elementRef: ElementRef,
    private dbService:db
    ){}

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();


  fromDATE:any;
  toDATE:any;
  name:any;

  landlordData=[];
  ReportTotalAmont = 0;
  loading:boolean = false;
  landlordList = [];

  ngOnInit(): void {
    this.getLandlord();
  }

  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
  }


  resetReport(){
    this.fromDATE = null;
    this.toDATE = null;
    this.name = null;
  }

  async getLandlord(){
    this.loading = true;
    this.landlordData = [];
    await this.dbService.getData('moneyDb')
    .then(res =>{
      res.forEach(element => {

        if(element.data()['position'] === 'landlord'){
          this.landlordData.push(element.data());

          if(this.landlordList.includes(element.data()['name'])){
            return;
          }else{
            this.landlordList.push(element.data()['name']);
          }
        }
      });
    });
  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }


}
