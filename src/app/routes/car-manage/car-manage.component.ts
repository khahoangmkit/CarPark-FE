import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarService} from "../../_services/car.service";
import {ParkingLotService} from "../../_services/parkingLot.service";
import {ToastrService} from "ngx-toastr";
import {isFormErrorNotNull} from "../../shared/function/validateForm";

@Component({
  selector: 'app-car-manage',
  templateUrl: './car-manage.component.html',
  styleUrls: ['./car-manage.component.scss']
})
export class CarManageComponent implements OnInit {

  rfCar: FormGroup;
  listParkingLot: any;

  constructor(
    public dialogRef: MatDialogRef<CarManageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { car: any },
    private readonly carService: CarService,
    private readonly parkingLotService: ParkingLotService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.rfCar = new FormGroup({
      licensePlate: new FormControl(this.data.car.licensePlate, Validators.required),
      carColor: new FormControl(this.data.car.carColor, Validators.required),
      Area:  new FormControl(this.data.car.carType, Validators.required),
      company:  new FormControl(this.data.car.company, Validators.required),
      parkingLot:  new FormControl(this.data.car.parkingLot, Validators.required)
    });

    this.getAllParkingLot();
  }

  getAllParkingLot(){
    this.parkingLotService.getAllParkingLot().subscribe(response => {
      this.listParkingLot = response;
    })
  }


  onSubmit(){
    if(!isFormErrorNotNull(this.rfCar)){
      const newCar = this.rfCar.value;
      const data = {
        id: this.data.car.id,
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
      };

      this.carService.updateCar(data).subscribe(response => {
        this.toastr.success("Update car successful!")
      })
      this.dialogRef.close();
    }
  }

  onDelete() {
    this.carService.deleteCar(this.data.car.id).subscribe(response => {
      this.toastr.success("Delete car successful!");
      this.dialogRef.close();
    })
  }

}
