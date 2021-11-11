import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {CarService} from "../../../_services/car.service";
import {ParkingLotService} from "../../../_services/parkingLot.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {


  rfCar: FormGroup;
  listParkingLot: any;

  constructor(
    private readonly toastr: ToastrService,
    private readonly carService: CarService,
    private readonly parkingLotService: ParkingLotService
  ) {
  }

  getListParkingLot() {
    this.parkingLotService.getAllParkingLot().subscribe(response => {
      this.listParkingLot = response;
    })
  }
  ngOnInit(): void {
    this.getListParkingLot();
    this.rfCar = new FormGroup({
      licensePlate: new FormControl('', Validators.required),
      carColor: new FormControl('', Validators.required),
      Area:  new FormControl('', Validators.required),
      company:  new FormControl('', Validators.required),
      parkingLot:  new FormControl('', Validators.required)
    })
  }

  isFormError() : boolean {
    let isError = false;
    Object.keys(this.rfCar.controls).forEach((key) => {

      const controlError = this.rfCar.get(key)?.errors;
      if(controlError !== null) {
        isError = true;
      }
    });
    return isError;
  }

  onSubmit() {

    if(!this.isFormError()){
      const newCar = this.rfCar.value;

      const data = {
        licensePlate: newCar.licensePlate,
        carColor: newCar.carColor,
        Area: newCar.carType,
        company: newCar.company,
        parkingLot: {
          id: parseInt(newCar.parkingLot),
          parkArea: 0,
          parkName: "string",
          parkPlace: "string",
          parkPrice: 0,
          parkStratus: "string"
        }
      }
      console.log("data ===", data)

      this.carService.addCar(data).subscribe(response => {
        this.toastr.success("Create new car successful!");
        this.rfCar.reset();
      })
    }
  }
}
