import { AfterViewChecked, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements
  OnInit{
  constructor(){}
  landlordListDetail:boolean = false;
  landlordFinanceDetail:boolean = false;
  tenantListDetail:boolean = false;
  tenantFinanceDetail:boolean = false;
  propertyListDetail:boolean = false;
  propertyDetail:boolean = false;
  incomeStatement:boolean = false;
  expensesStatement:boolean = false;



  ngOnInit(): void {

  }

  leaveLandlordList(){
    this.landlordListDetail = false;
  }

  overLandlordList(){
    this.landlordListDetail = true;
  }

  leaveFinanceLandlord(){
    this.landlordFinanceDetail = false;
  }

  overFinanceLandlord(){
    this.landlordFinanceDetail = true;
  }

  leaveFinanceTenant(){
    this.tenantFinanceDetail = false;
  }

  overFinanceTenant(){
    this.tenantFinanceDetail = true;
  }

  leaveTenantList(){
    this.tenantFinanceDetail = false;
  }

  overTenantList(){
    this.tenantFinanceDetail = true;
  }


  leavePropertyStatus(){
    this.propertyDetail = false;
  }

  overPropertyStatus(){
    this.propertyDetail = true;
  }

  leavePropertyList(){
    this.propertyListDetail = false;
  }

  overPropertyList(){
    this.propertyListDetail = true;
  }

  leaveIncomeStatement(){
    this.incomeStatement = false;
  }

  overIncomeStatement(){
    this.incomeStatement = true;
  }

  leaveExpensesStatement(){
    this.expensesStatement = false;
  }

  overExpensesStatement(){
    this.expensesStatement = true;
  }




}
