import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../_services/car.service";
import {ToastrService} from "ngx-toastr";
import {isFormErrorNotNull} from "../../shared/function/validateForm";
import {TripService} from "../../_services/trip.service";
import {BookingOfficeService} from "../../_services/bookingOffice.service";

@Component({
  selector: 'app-booking-office-manage',
  templateUrl: './booking-office-manage.component.html',
  styleUrls: ['./booking-office-manage.component.scss']
})
export class BookingOfficeManageComponent implements OnInit {
  rfBookingOffice: FormGroup;
  listTrip: any;

  constructor(
    public dialogRef: MatDialogRef<BookingOfficeManageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bookingOffice: any },
    private readonly bookingOfficeService: BookingOfficeService,
    private readonly tripService: TripService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const currentData = this.data.bookingOffice
    this.rfBookingOffice = new FormGroup({
      endContractDeadline: new FormControl(currentData.endContractDeadline, Validators.required),
      startContractDeadline: new FormControl(currentData.startContractDeadline, Validators.required),
      officeName: new FormControl(currentData.officeName, Validators.required),
      officePhone: new FormControl(currentData.officePhone, Validators.required),
      officePlace: new FormControl(currentData.officePlace, Validators.required),
      officePrice: new FormControl(currentData.officePrice, Validators.required),
      trip: new FormControl(currentData.trip.id, Validators.required),
    });

    this.getListTrip();
  }

  getListTrip() {
    this.tripService.getAllTrip().subscribe(response => {
      this.listTrip = response;
    })
  }


  onSubmit(){
    if(!isFormErrorNotNull(this.rfBookingOffice)){
      const newBookingOffice = this.rfBookingOffice.value;
      const data = {
        id: this.data.bookingOffice.id,
        endContractDeadline: new Date(newBookingOffice.endContractDeadline),
        startContractDeadline: new Date(newBookingOffice.startContractDeadline),
        officeName: newBookingOffice.officeName,
        officePhone: newBookingOffice.officePhone,
        officePlace: newBookingOffice.officePlace,
        officePrice: newBookingOffice.officePrice,
        trip: {
          id: parseInt(newBookingOffice.trip)
        }
      };

      this.bookingOfficeService.updateBookingOffice(data).subscribe(response => {
        this.toastr.success("Update booking office successful!")
      })
      this.dialogRef.close();
    }
  }

  onDelete() {
    this.bookingOfficeService.deleteBookingOffice(this.data.bookingOffice.id).subscribe(response => {
      this.toastr.success("Delete Booking Office successful!");
      this.dialogRef.close();
    })
  }
}
