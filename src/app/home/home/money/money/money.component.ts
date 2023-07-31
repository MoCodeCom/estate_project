import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';
import { db } from '../../services/db.service';
import { routeService } from '../../services/route.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit{
  @Input() selectedClient:any; //from tenant page object data
  constructor(
    private dataService:demo_data,
    //private router:Router,
    private elementRef:ElementRef,
    private dbService:db,
    private routeService:routeService
    ){}

  ngOnInit(): void {
    this.onMoneyTableList();
    this.elementRef.nativeElement;
    this.dbService.addFieldData();
    this._authri = this.routeService.RouteEdit;

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
  _authri:string;
  private eleId = '';
  /* ------- end props ------- */
  set setId (eleId){this.eleId = eleId}
  get setId (){return this.eleId}
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
    this.onClose()
    this.editVoucherAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.onClose()
    this.viewVoucherAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.onClose()
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

  onClose(){
    let dropback = document.getElementById('dropback');
    let childList = document.getElementById(this.eleId);
    dropback.style.display = 'none';
    childList.style.display = 'none';

  }

  onCard_option(data:any){
    this.eleId = data.landlordId;

    let childList = document.getElementById(data.landlordId);
    let dropback = document.getElementById('dropback');
    this.moneyTableList.forEach(ele =>{
      if(ele.landlordId == data.landlordId){
        dropback.style.display = 'inline';
        childList.style.display = 'inline';

      }
    });
  }

}
