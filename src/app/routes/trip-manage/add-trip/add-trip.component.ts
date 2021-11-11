import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TripService} from "../../../_services/trip.service";
import {isFormErrorNotNull} from "../../../shared/function/validateForm";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {

  rfTrip: FormGroup;

  constructor(
    private readonly toastr: ToastrService,
    private readonly tripService: TripService
  ) { }

  ngOnInit(): void {
    this.rfTrip = new FormGroup({
      bookedTicketNumber: new FormControl(0, Validators.required),
      carType: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      driver: new FormControl('', Validators.required),
      maximumOnlineTicketNumber: new FormControl(0, Validators.required)
    })
  }

  onSubmit() {
    if(!isFormErrorNotNull(this.rfTrip)){
      const newTrip = this.rfTrip.value;
      const data = {
        bookedTicketNumber: newTrip.bookedTicketNumber,
        carType: newTrip.carType,
        departureDate: newTrip.departureDate,
        departureTime: newTrip.departureTime,
        destination: newTrip.destination,
        driver: newTrip.driver,
        maximumOnlineTicketNumber: newTrip.maximumOnlineOnlineTicketNumber
      }

      this.tripService.addTrip(data).subscribe(response => {
        if(response) {
          this.toastr.success("Create Trip complete!");
          this.rfTrip.reset();
        }
      })
    }
  }


}
