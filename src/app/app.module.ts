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
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ListCarComponent } from './routes/car-manage/list-car/list-car.component';
import { AddCarComponent } from './routes/car-manage/add-car/add-car.component';
import { AddBookingOfficeComponent } from './routes/booking-office-manage/add-booking-office/add-booking-office.component';
import { ListBookingOfficeComponent } from './routes/booking-office-manage/list-booking-office/list-booking-office.component';
import { ListParkingLotComponent } from './routes/parking-lot-manage/list-parking-lot/list-parking-lot.component';
import { AddParkingLotComponent } from './routes/parking-lot-manage/add-parking-lot/add-parking-lot.component';
import { AddTripComponent } from './routes/trip-manage/add-trip/add-trip.component';
import { ListTripComponent } from './routes/trip-manage/list-trip/list-trip.component';
import { ListTicketComponent } from './routes/ticket-manage/list-ticket/list-ticket.component';
import { AddTicketComponent } from './routes/ticket-manage/add-ticket/add-ticket.component';

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
    ListCarComponent,
    AddCarComponent,
    AddBookingOfficeComponent,
    ListBookingOfficeComponent,
    ListParkingLotComponent,
    AddParkingLotComponent,
    AddTripComponent,
    ListTripComponent,
    ListTicketComponent,
    AddTicketComponent,
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
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
