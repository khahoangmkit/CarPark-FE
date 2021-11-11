import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TripService} from "../../_services/trip.service";
import {isFormErrorNotNull} from "../../shared/function/validateForm";

@Component({
  selector: 'app-trip-manage',
  templateUrl: './trip-manage.component.html',
  styleUrls: ['./trip-manage.component.scss']
})
export class TripManageComponent implements OnInit {

  rfTrip: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TripManageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { trip: any },
    private toastr: ToastrService,
    private readonly tripService: TripService
  ) { }

  ngOnInit(): void {
    const currentTrip = this.data.trip;
    console.log('currentTrip', currentTrip)
    this.rfTrip = new FormGroup({
      bookedTicketNumber: new FormControl(currentTrip.bookedTicketNumber, Validators.required),
      carType: new FormControl(currentTrip.carType, Validators.required),
      departureDate: new FormControl(currentTrip.departureDate, Validators.required),
      departureTime: new FormControl(currentTrip.departureTime, Validators.required),
      destination: new FormControl(currentTrip.destination, Validators.required),
      driver: new FormControl(currentTrip.driver, Validators.required),
      maximumOnlineTicketNumber: new FormControl(currentTrip.maximumOnlineTicketNumber, Validators.required)
    })
  }

  onSubmit() {
    if(!isFormErrorNotNull(this.rfTrip)) {
      const newTrip = this.rfTrip.value;
      const data = {
        id: this.data.trip.id,
        bookedTicketNumber: parseInt(newTrip.bookedTicketNumber),
        carType: newTrip.carType,
        departureDate: newTrip.departureDate,
        departureTime: newTrip.departureTime,
        destination: newTrip.destination,
        driver: newTrip.driver,
        maximumOnlineTicketNumber: parseInt(newTrip.maximumOnlineTicketNumber)
      }

      this.tripService.updateTrip(data).subscribe(response => {
        this.toastr.success("Update Trip complete!");
        this.dialogRef.close();
      });
    }
  }

  onDelete() {
    this.tripService.deleteTrip(this.data.trip.id).subscribe(res => {
      this.toastr.success("Delete Trip Successful!");
      this.dialogRef.close();
    })
  }
}
