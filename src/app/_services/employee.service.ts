import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private baseService: BaseService
  ) {}

  getAllEmployees():Observable<any> {
    return this.baseService.get(`${AppConstant.ApiUrl}Employee/GetAllEmployee`);
  }

  addEmployee(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}Employee/AddEmployee`, data);
  }

  updateEmployee(data: any) {
    return this.baseService.put(`${AppConstant.ApiUrl}Employee/UpdateEmployee`, data);
  }

  deleteEmployee(id: number) {
    return this.baseService.delete(`${AppConstant.ApiUrl}Employee/RemoveEmployee/${id}`,id)
  }
}
