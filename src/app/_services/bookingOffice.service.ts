import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingOfficeService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllBookingOffice():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}BookingOffice/GetAll`);
  }

  addBookingOffice(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}BookingOffice/AddBookingOffice`, data);
  }

  updateBookingOffice(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}BookingOffice/UpdateBookingOffice`, data);
  }

  deleteBookingOffice(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}BookingOffice/DeleteBookingOffice/${id}`,id)
  }
}
