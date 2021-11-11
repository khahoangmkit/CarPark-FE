import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllParkingLot():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}Parking/GetAll`);
  }

  addParkingLot(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}Parking/AddParkingLot`, data);
  }

  updateParkingLot(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}Parking/UpdateParkingLot`, data);
  }

  deleteParkingLot(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}Parking/DeleteParkingLot/${id}`,id)
  }
}
