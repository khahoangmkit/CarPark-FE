import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllCar():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}Car/GetAll`);
  }

  addCar(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}Car/AddCar`, data);
  }

  updateCar(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}Car/UpdateCar`, data);
  }

  deleteCar(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}Car/DeleteCar/${id}`,id)
  }
}
