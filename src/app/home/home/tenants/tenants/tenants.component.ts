import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent {

  constructor(
    private dataService:demo_data,
    private router:Router,
    private elementRef:ElementRef
    ){}
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
  }

  /* props*/
  lat =52.483397249897365;
  lng =-1.8842605687335423;
  TenantTableList = [];
  filterString:string;
  addingTenantAllowed:boolean=false;
  viewTenantAllowed:boolean=false;
  deleteTenantAllowed:boolean=false;
  editTenantAllowed:boolean=false;
  selectdClient:any;
  /* end props */

  onMarker(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.leg;
  }

  onLandlordTableList(){
    this.TenantTableList = this.dataService.tenantData();
  }

  add_tenant(){
    this.addingTenantAllowed = true;
  }

  on_edit(data:any){
    this.editTenantAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.viewTenantAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.deleteTenantAllowed = true;
    this.selectdClient = data;
  }

  onReloadPg(){
    this.addingTenantAllowed = false;
    this.viewTenantAllowed = false;
    this.deleteTenantAllowed = false;
    this.editTenantAllowed = false;
  }
}
