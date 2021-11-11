import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {BookingOfficeService} from "../../../_services/bookingOffice.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {BookingOfficeDto} from "../../../_models/booking-office-dto";
import {BookingOfficeManageComponent} from "../booking-office-manage.component";

@Component({
  selector: 'app-list-booking-office',
  templateUrl: './list-booking-office.component.html',
  styleUrls: ['./list-booking-office.component.scss']
})
export class ListBookingOfficeComponent implements OnInit {
  title: string = "List BookingOffice";
  displayedColumns: string[] = [ 'ID','Booking office', 'Trip', 'Action'];
  listData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private readonly bookingOfficeService: BookingOfficeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllBookingOffice();
  }

  getAllBookingOffice(){
    this.bookingOfficeService.getAllBookingOffice().subscribe((response) => {
      this.listData = new MatTableDataSource<BookingOfficeDto>(response);
      this.listData.paginator = this.paginator;
    });
  }

  viewBookingOfficeDetail(bookingOffice: any){
    console.log('BookingOffice', bookingOffice)
    const dialogRef = this.dialog.open(BookingOfficeManageComponent, {
      width: '80%',
      data: {
        bookingOffice
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBookingOffice();
    })
  }

}
