import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeDto} from "../../../_models/employee-dto";
import {MatPaginator} from "@angular/material/paginator";
import {EmployeeService} from "../../../_services/employee.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeManageComponent} from "../employee-manage.component";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  title: string = "List Employees"
  displayedColumns: string[] = ['Id', 'Name', 'Address', 'Date Of Birth', 'Phone Number', 'Department', 'Action'];
  listData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private readonly employeeService: EmployeeService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee(): void {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      this.listData = new MatTableDataSource<EmployeeDto>(response.data);
      this.listData.paginator = this.paginator;
    });
  }

  openEmployeeDetail(employee: any): void{
    const dialogRef = this.dialog.open(EmployeeManageComponent,{
      width: '80%',
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllEmployee();
    })
  }

}
