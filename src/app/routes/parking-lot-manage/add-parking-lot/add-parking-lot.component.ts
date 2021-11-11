import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CarService} from "../../../_services/car.service";
import {ParkingLotService} from "../../../_services/parkingLot.service";
import {isFormErrorNotNull} from "../../../shared/function/validateForm";

@Component({
  selector: 'app-add-parking-lot',
  templateUrl: './add-parking-lot.component.html',
  styleUrls: ['./add-parking-lot.component.scss']
})
export class AddParkingLotComponent implements OnInit {

  rfParkingLot: FormGroup;

  constructor(
    private readonly toastr: ToastrService,
    private readonly parkingLotService: ParkingLotService
  ) {
  }

  ngOnInit(): void {
    this.rfParkingLot = new FormGroup({
      parkName: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required),
      area:  new FormControl('', Validators.required),
      price:  new FormControl('', Validators.required),
    })
  }

  onResetForm() {
    this.rfParkingLot.reset();
  }

  onSubmit() {

    if(!isFormErrorNotNull(this.rfParkingLot)){
      const newParkingLot = this.rfParkingLot.value;

      const data = {
        parkName: newParkingLot.parkName,
        parkPlace: newParkingLot.place,
        parkArea: parseInt(newParkingLot.area),
        parkPrice: parseInt(newParkingLot.price),
      }

      this.parkingLotService.addParkingLot(data).subscribe(response => {
        this.toastr.success("Create new parking lot successful!");
        this.rfParkingLot.reset();
      })
    }
  }

}
