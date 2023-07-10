import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { db } from 'src/app/home/home/services/db.service';
import { demo_data } from 'src/app/home/home/services/demo_data.service';

@Component({
  selector: 'app-frother',
  templateUrl: './frother.component.html',
  styleUrls: ['./frother.component.css']
})
export class FrotherComponent implements OnInit,OnDestroy {

  constructor(
    private elementRef: ElementRef,
    private dbService:db
    ){}

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();


  fromDATE:any;
  toDATE:any;
  name:any;
  otherData=[];
  ReportTotalAmont = 0;
  loading:boolean = false;
  otherList = [];

  ngOnInit(): void {

    this.getOther();
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


  async getOther(){
    this.loading = true;
    this.otherData = [];
    await this.dbService.getData('moneyDb')
    .then(res =>{
      res.forEach(element => {

        if(element.data()['position'] === 'other'){
          this.otherData.push(element.data());

          if(this.otherList.includes(element.data()['name'])){
            return;
          }else{
            this.otherList.push(element.data()['name']);
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
