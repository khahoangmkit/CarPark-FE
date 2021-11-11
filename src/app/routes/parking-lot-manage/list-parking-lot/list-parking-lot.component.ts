import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {CarDto} from "../../../_models/car-dto";
import {ParkingLotService} from "../../../_services/parkingLot.service";
import {ParkingLotManageComponent} from "../parking-lot-manage.component";

@Component({
  selector: 'app-list-parking-lot',
  templateUrl: './list-parking-lot.component.html',
  styleUrls: ['./list-parking-lot.component.scss']
})
export class ListParkingLotComponent implements OnInit {
  title: string = "List Parking Lot";
  displayedColumns: string[] = [ 'ID', 'Parking Lot', 'Place', 'Area', 'Price', 'Status', 'Action'];
  listData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private readonly parkingLotService: ParkingLotService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllParkingLot();
  }

  getAllParkingLot(){
    this.parkingLotService.getAllParkingLot().subscribe((response) => {
      this.listData = new MatTableDataSource<CarDto>(response);
      this.listData.paginator = this.paginator;
    });
  }

  viewParkingLotDetail(parkingLot: any){
    const dialogRef = this.dialog.open(ParkingLotManageComponent, {
      width: '80%',
      data: {
        parkingLot
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllParkingLot();
    })
  }

}
