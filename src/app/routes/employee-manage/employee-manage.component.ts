import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EmployeeService} from "../../_services/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.scss']
})
export class EmployeeManageComponent implements OnInit {
  rfEmployee: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { employee: any, loadData: any },
    private readonly employeeService: EmployeeService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.rfEmployee = new FormGroup({
      fullName: new FormControl(this.data.employee.fullName, [Validators.required]),
      phone: new FormControl(this.data.employee.phone, [Validators.required]),
      dateOfBirth: new FormControl(this.data.employee.dateOfBirth, [Validators.required]),
      sex: new FormControl(this.data.employee.sex, [Validators.required]),
      address: new FormControl(this.data.employee.address, [Validators.required]),
      email: new FormControl(this.data.employee.email, [Validators.required]),
      account: new FormControl(this.data.employee.account),
      password: new FormControl(this.data.employee.password),
      department: new FormControl(this.data.employee.department, [Validators.required])
    })
  }

  isFormError(): boolean {
    let isError = false;
    Object.keys(this.rfEmployee.controls).forEach((key) => {

      const controlError = this.rfEmployee.get(key)?.errors;
      if (controlError !== null) {
        isError = true;
      }
    });
    return isError;
  }

  onSubmit() {
    if (!this.isFormError()) {
      const infoEmployee = this.rfEmployee.value;
      console.log(infoEmployee);
      const data = {
        "id": this.data.employee.id,
        "fullName": infoEmployee.fullName,
        "dateOfBirth": new Date(infoEmployee.dateOfBirth),
        "sex": infoEmployee.sex,
        "address": infoEmployee.address,
        "phone": infoEmployee.phone,
        "email": infoEmployee.email,
        "account": infoEmployee.account,
        "password": infoEmployee.password,
        "department": infoEmployee.department
      }

      this.employeeService.updateEmployee(data).subscribe(() => {
        this.toastr.success("Update Employee Complete!");
      })
    }
  }

  removeEmployee() {
    return this.employeeService.deleteEmployee(this.data.employee.id).subscribe(() => {
      this.toastr.success("Delete Employee successful!")
    })
  }


}
