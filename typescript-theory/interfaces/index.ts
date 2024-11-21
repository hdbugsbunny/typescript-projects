interface VEHICLE {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface REPORTABLE {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `The ${this.name} is ${this.broken ? "broken" : "functional"}.`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `The ${this.name} is ${this.sugar} grams of sugar`;
  },
};

//! Long Type Annotations
const printVehicleLong = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printVehicleLong(oldCivic);

//! Short Type Annotations
const printVehicleShort = (vehicle: VEHICLE): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printVehicleShort(oldCivic);

//* Short Summary
const printSummary = (item: REPORTABLE): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
