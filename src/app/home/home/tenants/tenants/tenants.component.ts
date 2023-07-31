import { Component, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';
import { demo_data } from '../../services/demo_data.service';
import { db } from '../../services/db.service';
import { routeService } from '../../services/route.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent {

  constructor(
    private dataService:demo_data,
    private router:Router,
    private elementRef:ElementRef,
    private dbService:db,
    private routeService:routeService
    ){}
  ngOnInit(): void {
    this.onTenantTableList();
    this.elementRef.nativeElement;
    this._authri = this.routeService.RouteEdit;
  }

  /* -----  props  -----*/

  tenantTableList = [];
  filterString:string;
  addingTenantAllowed:boolean=false;
  viewTenantAllowed:boolean=false;
  deleteTenantAllowed:boolean=false;
  editTenantAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  _authri:string;
  private eleId = '';
  /* ------- end props ------- */
  set setId (eleId){this.eleId = eleId}
  get setId (){return this.eleId}


  async onTenantTableList(){
    this.loading = true;

    await this.dbService.getData('tenantDb').then(
      res =>{
        this.tenantTableList  =[];
        res.forEach(element =>{
          this.tenantTableList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  add_tenant(){
    this.addingTenantAllowed = true;
  }

  on_edit(data:any){
    this.onClose();
    this.editTenantAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.onClose();
    this.viewTenantAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.onClose();

    this.deleteTenantAllowed = true;
    this.selectdClient = data;
    this.dbName = 'tenantDb';
  }

  onReloadPg(){

    this.addingTenantAllowed = false;
    this.viewTenantAllowed = false;
    this.deleteTenantAllowed = false;
    this.editTenantAllowed = false;
    this.ngOnInit();
  }

  onCard_option(data:any){
    this.eleId = data.landlordId;

    let childList = document.getElementById(data.landlordId);
    let dropback = document.getElementById('dropback');
    this.tenantTableList.forEach(ele =>{
      if(ele.landlordId == data.landlordId){
        dropback.style.display = 'inline';
        childList.style.display = 'inline';

      }
    });
  }

  onClose(){
    let dropback = document.getElementById('dropback');
    let childList = document.getElementById(this.eleId);
    dropback.style.display = 'none';
    childList.style.display = 'none';
  }
}
