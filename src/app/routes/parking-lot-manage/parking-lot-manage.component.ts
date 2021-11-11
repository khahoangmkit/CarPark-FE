import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ParkingLotService} from "../../_services/parkingLot.service";
import {ToastrService} from "ngx-toastr";
import {isFormErrorNotNull} from "../../shared/function/validateForm";

@Component({
  selector: 'app-parking-lot-manage',
  templateUrl: './parking-lot-manage.component.html',
  styleUrls: ['./parking-lot-manage.component.scss']
})
export class ParkingLotManageComponent implements OnInit {

  rfParkingLot: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ParkingLotManageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parkingLot: any },
    private readonly parkingLotService: ParkingLotService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const currentParkingLot = this.data.parkingLot;
    this.rfParkingLot = new FormGroup({
      parkName: new FormControl(currentParkingLot.parkName, Validators.required),
      place: new FormControl(currentParkingLot.parkPlace, Validators.required),
      area:  new FormControl(currentParkingLot.parkArea, Validators.required),
      price:  new FormControl(currentParkingLot.parkPrice, Validators.required),
    });
  }

  onSubmit(){
    if(!isFormErrorNotNull(this.rfParkingLot)){
      const newParkingLot = this.rfParkingLot.value;
      const data = {
        id: this.data.parkingLot.id,
        parkName: newParkingLot.parkName,
        parkPlace: newParkingLot.place,
        parkArea: parseInt(newParkingLot.area),
        parkPrice: parseInt(newParkingLot.price),
      };

      this.parkingLotService.updateParkingLot(data).subscribe(response => {
        this.toastr.success("Update parking lot successful!")
      })
      this.dialogRef.close();
    }
  }

  onDelete() {
    this.parkingLotService.deleteParkingLot(this.data.parkingLot.id).subscribe(response => {
      this.toastr.success("Delete parking lot successful!");
      this.dialogRef.close();
    })
  }
}
