import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CarService} from "../../../_services/car.service";
import {ParkingLotService} from "../../../_services/parkingLot.service";
import {BookingOfficeService} from "../../../_services/bookingOffice.service";
import {TripService} from "../../../_services/trip.service";
import {isFormErrorNotNull} from "../../../shared/function/validateForm";

@Component({
  selector: 'app-add-booking-office',
  templateUrl: './add-booking-office.component.html',
  styleUrls: ['./add-booking-office.component.scss']
})
export class AddBookingOfficeComponent implements OnInit {

  rfBookingOffice: FormGroup;
  listTrip: any;

  constructor(
    private readonly toastr: ToastrService,
    private readonly bookingOfficeService: BookingOfficeService,
    private readonly tripService: TripService
  ) {
  }

  getListTrip() {
    this.tripService.getAllTrip().subscribe(response => {
      this.listTrip = response;
    })
  }

  ngOnInit(): void {
    this.getListTrip();
    this.rfBookingOffice = new FormGroup({
      endContractDeadline: new FormControl('', Validators.required),
      startContractDeadline: new FormControl('', Validators.required),
      officeName: new FormControl('', Validators.required),
      officePhone: new FormControl('', Validators.required),
      officePlace: new FormControl('', Validators.required),
      officePrice: new FormControl('', Validators.required),
      trip: new FormControl('', Validators.required),
    })
  }

  onSubmit() {

    if(!isFormErrorNotNull(this.rfBookingOffice)){
      const newBookingOffice = this.rfBookingOffice.value;

      const data = {
        endContractDeadline: new Date(newBookingOffice.endContractDeadline),
        startContractDeadline: new Date(newBookingOffice.startContractDeadline),
        officeName: newBookingOffice.officeName,
        officePhone: newBookingOffice.officePhone,
        officePlace: newBookingOffice.officePlace,
        officePrice: newBookingOffice.officePrice,
        trip: {
          id: parseInt(newBookingOffice.trip)
        }
      }

      this.bookingOfficeService.addBookingOffice(data).subscribe(response => {
        this.toastr.success("Create new booking office successful!");
        this.rfBookingOffice.reset();
      })
    }
  }
}
