import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { demo_data } from '../../../services/demo_data.service';
import { db } from '../../../services/db.service';

@Component({
  selector: 'app-frtenant',
  templateUrl: './frtenant.component.html',
  styleUrls: ['./frtenant.component.css']
})
export class FrtenantComponent implements OnInit,OnDestroy {

  constructor(
    private elementRef: ElementRef,
    private dbService:db
    ){}

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();


  fromDATE:any;
  toDATE:any;
  name:any;

  tenantData=[];
  ReportTotalAmont = 0;
  loading:boolean = false;
  tenantList = [];

  ngOnInit(): void {
    this.getTenant();
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


  async getTenant(){
    this.loading = true;
    this.tenantData = [];
    await this.dbService.getData('moneyDb')
    .then(res =>{
      res.forEach(element => {

        if(element.data()['position'] === 'tenant'){
          this.tenantData.push(element.data());

          if(this.tenantList.includes(element.data()['name'])){
            return;
          }else{
            this.tenantList.push(element.data()['name']);
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

