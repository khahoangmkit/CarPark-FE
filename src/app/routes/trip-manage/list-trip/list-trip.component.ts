import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {TripService} from "../../../_services/trip.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {TripDto} from "../../../_models/trip-dto";
import {BookingOfficeManageComponent} from "../../booking-office-manage/booking-office-manage.component";
import {TripManageComponent} from "../trip-manage.component";

@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.scss']
})
export class ListTripComponent implements OnInit {

  title: string = "List Trip";
  listData: any;
  displayedColumns: string[] = ['No', 'Destination', 'Departure time', 'Driver', 'Car type', 'Booking ticket number', 'Action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    private readonly tripService: TripService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllTrip();
  }

  getAllTrip() {
    this.tripService.getAllTrip().subscribe(response => {
      this.listData = new MatTableDataSource<TripDto>(response);
      this.listData.paginator = this.paginator;
    });
  }

  viewTripDetail(trip: any){
    const dialogRef = this.dialog.open(TripManageComponent, {
      width: '80%',
      data: {
        trip
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllTrip();
    })
  }

}
