import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LandlordsComponent } from './home/home/landlords/landlords/landlords.component';
import { TenantsComponent } from './home/home/tenants/tenants/tenants.component';
import { PropertiesComponent } from './home/home/properties/properties/properties.component';
import { OthersComponent } from './home/home/others/others/others.component';
import { MoneyComponent } from './home/home/money/money/money.component';
import { AuthComponent } from './home/home/auth/auth/auth.component';
import { ProfileComponent } from './home/home/auth/profile/profile/profile.component';
import { ReportsComponent } from './home/home/reports/reports/reports.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { appRouteModule } from './home/home/modules/appRouteModule.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandlordsComponent,
    TenantsComponent,
    PropertiesComponent,
    OthersComponent,
    MoneyComponent,
    AuthComponent,
    ProfileComponent,
    ReportsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouteModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
