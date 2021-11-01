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

const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: HomePageComponent,
  },
  {
    path: 'employee/list',
    // canActivate: [AuthGuard],
    component: ListEmployeeComponent
  },
  {
    path: 'employee/add',
    // canActivate: [AuthGuard],
    component: AddEmployeeComponent,
  },
  {
    path: 'car/list',
    // canActivate: [AuthGuard],
    component: CarManageComponent,
  },
  {
    path: 'car/add',
    // canActivate: [AuthGuard],
    component: CarManageComponent,
  },
  {
    path: 'trip/list',
    // canActivate: [AuthGuard],
    component: TripManageComponent,
  },
  {
    path: 'trip/add',
    // canActivate: [AuthGuard],
    component: TripManageComponent,
  },
  {
    path: 'ticket/list',
    // canActivate: [AuthGuard],
    component: TicketManageComponent,
  },
  {
    path: 'ticket/add',
    // canActivate: [AuthGuard],
    component: TicketManageComponent,
  },
  {
    path: 'parking-lot/list',
    // canActivate: [AuthGuard],
    component: ParkingLotManageComponent
  },
  {
    path: 'parking-lot/add',
    // canActivate: [AuthGuard],
    component: ParkingLotManageComponent
  },
  {
    path: 'booking-office/add',
    // canActivate: [AuthGuard],
    component: BookingOfficeManageComponent
  },
  {
    path: 'booking-office/list',
    // canActivate: [AuthGuard],
    component: BookingOfficeManageComponent,
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

