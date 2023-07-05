import { Component, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';
import { demo_data } from '../../services/demo_data.service';
import { db } from '../../services/db.service';

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
    private dbService:db
    ){}
  ngOnInit(): void {
    this.onTenantTableList();
    this.elementRef.nativeElement;
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
  /* -----  end props   -----*/


  async onTenantTableList(){

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
    this.dbName = 'tenantDb';
  }

  onReloadPg(){
    this.addingTenantAllowed = false;
    this.viewTenantAllowed = false;
    this.deleteTenantAllowed = false;
    this.editTenantAllowed = false;
    this.ngOnInit();
  }
}
