import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../_services/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  rfEmployee: FormGroup;

  constructor(
    private readonly employeeService : EmployeeService,
    private readonly router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.rfEmployee = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      sex: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      account: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      department: new FormControl('',[Validators.required])
    })
  }

  isFormError() : boolean {
    let isError = false;
    Object.keys(this.rfEmployee.controls).forEach((key) => {

      const controlError = this.rfEmployee.get(key)?.errors;
      if(controlError !== null) {
        isError = true;
      }
    });
    return isError;
  }

  onSubmit() {
    if(!this.isFormError()){
      const data = {
        "fullName": this.rfEmployee.value.fullName,
        "dateOfBirth": new Date(this.rfEmployee.value.dateOfBirth),
        "sex": this.rfEmployee.value.sex,
        "address": this.rfEmployee.value.address,
        "phone": this.rfEmployee.value.phone,
        "email": this.rfEmployee.value.email,
        "account": this.rfEmployee.value.account,
        "password": this.rfEmployee.value.password,
        "department": this.rfEmployee.value.department
      }

      this.employeeService.addEmployee(data).subscribe( emp => {
       if( emp === null) {
         this.toastr.error("Create Employee Failure!")
       } else {
         this.toastr.success("Create employee successful!")
       }
      })
    };
  }

  onResetForm(){
    this.rfEmployee.reset();
  }

  navigationList(){
    this.router.navigate(['/employee/list'])
  }

}
