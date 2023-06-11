import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

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


//calendar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './home/home/info/calendar/calendar.component';
import { filerPipe } from './home/home/pipes/filterPipe.pipe';
import { AddLandlordComponent } from './home/home/add_data/add-landlord/add-landlord.component';
import { AddTenantComponent } from './home/home/add_data/add-tenant/add-tenant.component';
import { AddPropertyComponent } from './home/home/add_data/add-property/add-property.component';
import { AddOtherComponent } from './home/home/add_data/add-other/add-other.component';


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
    NotFoundComponent,
    CalendarComponent,
    filerPipe,
    AddLandlordComponent,
    AddTenantComponent,
    AddPropertyComponent,
    AddOtherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule,
    BrowserModule,
    AppRoutingModule,
    appRouteModule,
    RouterModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({apiKey:'AIzaSyBWDl4DyscEGeARJgm1MQmaxCj0WwB_cYM'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

