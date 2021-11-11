import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {CookieService} from "ngx-cookie-service";
import {LoginRequestDto} from "../_models/login-request-dto";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private baseService: BaseService,
    private cookieService: CookieService
  ) { }

  login(infoLogin: LoginRequestDto) {
    return this.baseService.post(`${AppConstant.ApiUrl}Authentication/Login`, infoLogin)
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
