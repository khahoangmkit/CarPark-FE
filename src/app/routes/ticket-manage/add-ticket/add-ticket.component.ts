import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isFormErrorNotNull} from "../../../shared/function/validateForm";
import {ToastrService} from "ngx-toastr";
import {TicketService} from "../../../_services/ticket.service";
import {TripService} from "../../../_services/trip.service";
import {CarService} from "../../../_services/car.service";

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {

  rfTicket: FormGroup;
  listCar: any;
  listTrip: any;

  constructor(
    private readonly toastr: ToastrService,
    private readonly ticketService: TicketService,
    private readonly tripService: TripService,
    private readonly carService: CarService,
  ) { }

  ngOnInit(): void {
    this.rfTicket = new FormGroup({
      customer: new FormControl('', Validators.required),
      bookingTime: new FormControl('', Validators.required),
      car: new FormControl('', Validators.required),
      trip: new FormControl('', Validators.required),
    })

    this.getAllData();
  }

  getAllData(){
    this.tripService.getAllTrip().subscribe(res => {
      this.listTrip  = res;
    })
    this.carService.getAllCar().subscribe(res => {
      this.listCar = res;
    })
  }

  onSubmit(){
    if(!isFormErrorNotNull(this.rfTicket)){
      const newTicket = this.rfTicket.value;
      const data = {
        customer: newTicket.customer,
        bookingTime: new Date(newTicket.bookingTime),
        car: {
          licensePlate: newTicket.car
        },
        trip: {
          id: parseInt(newTicket.trip)
        }
      }

      this.ticketService.addTicket(data).subscribe(res => {
        this.toastr.success("Create ticket successful!");
        this.rfTicket.reset();
      })
    }
  }
}
