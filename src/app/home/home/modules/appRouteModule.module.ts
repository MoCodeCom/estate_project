import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home.component";
import { NotFoundComponent } from "../../not-found/not-found.component";
import { LandlordsComponent } from "../landlords/landlords/landlords.component";
import { TenantsComponent } from "../tenants/tenants/tenants.component";
import { PropertiesComponent } from "../properties/properties/properties.component";
import { OthersComponent } from "../others/others/others.component";
import { MoneyComponent } from "../money/money/money.component";
import { ReportsComponent } from "../reports/reports/reports.component";
import { ProfileComponent } from "../auth/profile/profile/profile.component";
import { AuthComponent } from "../auth/auth/auth.component";
import { AddLandlordComponent } from "../add_data/add-landlord/add-landlord.component";


const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'landlords',component:LandlordsComponent, children:[
    {path:'addlandlord',component:AddLandlordComponent}
  ]},
  {path:'tenants',component:TenantsComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'others',component:OthersComponent},
  {path:'money',component:MoneyComponent},
  {path:'reports',component:ReportsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'auth', component:AuthComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**', redirectTo:'/not-found'}
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class appRouteModule{

}
