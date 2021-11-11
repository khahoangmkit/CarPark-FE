import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {CarService} from "../../../_services/car.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {CarDto} from "../../../_models/car-dto";
import {CarManageComponent} from "../car-manage.component";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {

  title: string = "List Car";
  displayedColumns: string[] = [ 'License Plate', 'Car Color', 'Car Type', 'Company', 'Parking Lot', 'Action'];
  listData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private readonly carService: CarService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCar();
  }

  getAllCar(){
    this.carService.getAllCar().subscribe((response) => {
      this.listData = new MatTableDataSource<CarDto>(response);
      this.listData.paginator = this.paginator;
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  viewCarDetail(car: any){
    const dialogRef = this.dialog.open(CarManageComponent, {
      width: '80%',
      data: {
        car
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCar();
    })
  }

}
