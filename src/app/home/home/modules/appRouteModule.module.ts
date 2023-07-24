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
import { ChartsComponent } from "../charts/charts/charts.component";
import { SettingComponent } from "../setting/setting/setting.component";
import { LoginAuthComponent } from "src/app/login-auth/login-auth.component";
import { AuthGuard } from "src/app/login-auth/login-auth.guard";
import { MainComponent } from "src/app/main/main.component";


const appRoutes:Routes =[
  {path:'', redirectTo:'/loginAuth', pathMatch:'full'},
  {path:'loginAuth',component:LoginAuthComponent},

  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'landlords',component:LandlordsComponent, canActivate:[AuthGuard]},
  {path:'tenants',component:TenantsComponent, canActivate:[AuthGuard] },
  {path:'properties',component:PropertiesComponent, canActivate:[AuthGuard] },
  {path:'others',component:OthersComponent, canActivate:[AuthGuard] },
  {path:'money',component:MoneyComponent, canActivate:[AuthGuard] },
  {path:'reports',component:ReportsComponent, canActivate:[AuthGuard] },
  {path:'charts', component:ChartsComponent, canActivate:[AuthGuard] },
  {path:'setting', component:SettingComponent, canActivate:[AuthGuard] },
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard] },
  {path:'auth', component:AuthComponent , canActivate:[AuthGuard]},
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
