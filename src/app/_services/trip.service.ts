import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllTrip():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}Trip/GetAll`);
  }

  addTrip(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}Trip/AddTrip`, data);
  }

  updateTrip(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}Trip/UpdateTrip`, data);
  }

  deleteTrip(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}Trip/DeleteTrip/${id}`,id)
  }
}
