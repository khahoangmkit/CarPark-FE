export interface BookingOfficeDto{
  id: number;
  endContractDeadline: string,
  startContractDeadline: string,
  officeName: string,
  officePhone: string,
  officePlace: string,
  officePrice: number,
  trip: object
}
