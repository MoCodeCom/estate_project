import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit{
  constructor(
    private dataService:demo_data,
    private router:Router,
    private elementRef:ElementRef
    ){}

  @Input() selectedClient:any; //from tenant page object data
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
  }

  /* props*/
  lat =52.483397249897365;
  lng =-1.8842605687335423;
  VoucherTableList = [];
  filterString:string;
  addingVoucherAllowed:boolean=false;
  viewVoucherAllowed:boolean=false;
  deleteVoucherAllowed:boolean=false;
  editVoucherAllowed:boolean=false;
  selectdClient:any;
  /* end props */

  onMarker(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.leg;
  }

  onLandlordTableList(){
    this.VoucherTableList = this.dataService.moneyData();
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
  }

  onReloadPg(){
    this.addingVoucherAllowed = false;
    this.viewVoucherAllowed = false;
    this.deleteVoucherAllowed = false;
    this.editVoucherAllowed = false;
  }

}
