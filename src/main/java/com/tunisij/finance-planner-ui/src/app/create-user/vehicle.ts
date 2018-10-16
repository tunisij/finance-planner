export class Vehicle {
  vehicleName?: String;
  value?: Number;
  modelYear?: Number;

  constructor(vehicleName?: String, value?: Number, modelYear?: Number) {
    this.vehicleName = vehicleName;
    this.value = value;
    this.modelYear = modelYear;
  }
}
