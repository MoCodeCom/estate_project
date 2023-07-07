import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit{
  constructor(
    private dataService:demo_data,
    //private router:Router,
    private elementRef:ElementRef,
    private dbService:db
    ){}

  @Input() selectedClient:any; //from tenant page object data
  ngOnInit(): void {
    this.onMoneyTableList();
    this.elementRef.nativeElement;
    this.dbService.addFieldData();

  }

  /* props*/
  moneyTableList = [];
  filterString:string;
  addingVoucherAllowed:boolean=false;
  viewVoucherAllowed:boolean=false;
  deleteVoucherAllowed:boolean=false;
  editVoucherAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  /* end props */


  async onMoneyTableList(){
    this.moneyTableList = this.dataService.moneyData();

    this.loading = true;
    await this.dbService.getData('moneyDb').then(
      res =>{
        this.moneyTableList  =[];
        res.forEach(element =>{
          this.moneyTableList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  add_landlord(){
    this.addingVoucherAllowed = true;
  }

  on_edit(data:any){
    this.editVoucherAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.viewVoucherAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.deleteVoucherAllowed = true;
    this.selectdClient = data;
    this.dbName = 'moneyDb'
  }

  onReloadPg(){
    this.addingVoucherAllowed = false;
    this.viewVoucherAllowed = false;
    this.deleteVoucherAllowed = false;
    this.editVoucherAllowed = false;
    this.ngOnInit();
  }

}
