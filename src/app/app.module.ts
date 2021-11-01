import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/sessions/login/login.component';
import {Error404Component} from "./routes/sessions/404.component";
import { TableDataComponent } from './shared/components/table-data/table-data.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmployeeManageComponent } from './routes/employee-manage/employee-manage.component';
import { ParkingLotManageComponent } from './routes/parking-lot-manage/parking-lot-manage.component';
import { TripManageComponent } from './routes/trip-manage/trip-manage.component';
import { TicketManageComponent } from './routes/ticket-manage/ticket-manage.component';
import { CarManageComponent } from './routes/car-manage/car-manage.component';
import { BookingOfficeManageComponent } from './routes/booking-office-manage/booking-office-manage.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ListEmployeeComponent } from './routes/employee-manage/list-employee/list-employee.component';
import { AddEmployeeComponent } from './routes/employee-manage/add-employee/add-employee.component';
import {RoutesRoutingModule} from "./routes/routes-routing.module";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import { SearchComponent } from './shared/components/search/search.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    TableDataComponent,
    NavigationComponent,
    EmployeeManageComponent,
    ParkingLotManageComponent,
    TripManageComponent,
    TicketManageComponent,
    CarManageComponent,
    BookingOfficeManageComponent,
    HomePageComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    SidebarComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
