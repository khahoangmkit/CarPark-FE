import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../core/authentication/auth.guared";
import {EmployeeManageComponent} from "./employee-manage/employee-manage.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./sessions/login/login.component";
import {Error404Component} from "./sessions/404.component";
import {CarManageComponent} from "./car-manage/car-manage.component";
import {ListEmployeeComponent} from "./employee-manage/list-employee/list-employee.component";
import {AddEmployeeComponent} from "./employee-manage/add-employee/add-employee.component";
import {NgModule} from "@angular/core";
import {ParkingLotManageComponent} from "./parking-lot-manage/parking-lot-manage.component";
import {BookingOfficeManageComponent} from "./booking-office-manage/booking-office-manage.component";
import {TripManageComponent} from "./trip-manage/trip-manage.component";
import {TicketManageComponent} from "./ticket-manage/ticket-manage.component";
import {ListCarComponent} from "./car-manage/list-car/list-car.component";
import {AddCarComponent} from "./car-manage/add-car/add-car.component";
import {ListTripComponent} from "./trip-manage/list-trip/list-trip.component";
import {AddTripComponent} from "./trip-manage/add-trip/add-trip.component";
import {ListTicketComponent} from "./ticket-manage/list-ticket/list-ticket.component";
import {AddTicketComponent} from "./ticket-manage/add-ticket/add-ticket.component";
import {ListParkingLotComponent} from "./parking-lot-manage/list-parking-lot/list-parking-lot.component";
import {AddParkingLotComponent} from "./parking-lot-manage/add-parking-lot/add-parking-lot.component";
import {AddBookingOfficeComponent} from "./booking-office-manage/add-booking-office/add-booking-office.component";
import {ListBookingOfficeComponent} from "./booking-office-manage/list-booking-office/list-booking-office.component";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomePageComponent,
  },
  {
    path: 'employee/list',
    canActivate: [AuthGuard],
    component: ListEmployeeComponent
  },
  {
    path: 'employee/add',
    canActivate: [AuthGuard],
    component: AddEmployeeComponent,
  },
  {
    path: 'car/list',
    canActivate: [AuthGuard],
    component: ListCarComponent,
  },
  {
    path: 'car/add',
    canActivate: [AuthGuard],
    component: AddCarComponent,
  },
  {
    path: 'trip/list',
    canActivate: [AuthGuard],
    component: ListTripComponent,
  },
  {
    path: 'trip/add',
    canActivate: [AuthGuard],
    component: AddTripComponent,
  },
  {
    path: 'ticket/list',
    canActivate: [AuthGuard],
    component: ListTicketComponent,
  },
  {
    path: 'ticket/add',
    canActivate: [AuthGuard],
    component: AddTicketComponent,
  },
  {
    path: 'parking-lot/list',
    canActivate: [AuthGuard],
    component: ListParkingLotComponent
  },
  {
    path: 'parking-lot/add',
    canActivate: [AuthGuard],
    component: AddParkingLotComponent
  },
  {
    path: 'booking-office/add',
    canActivate: [AuthGuard],
    component: AddBookingOfficeComponent
  },
  {
    path: 'booking-office/list',
    canActivate: [AuthGuard],
    component: ListBookingOfficeComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomePageComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }

