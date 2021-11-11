import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllTicket():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}Ticket/GetAll`);
  }

  addTicket(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}Ticket/AddTicket`, data);
  }

  updateTicket(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}Ticket/UpdateTicket`, data);
  }

  deleteTicket(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}Ticket/DeleteTicket/${id}`,id)
  }
}
