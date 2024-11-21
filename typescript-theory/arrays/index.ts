const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help With Inference When Extracting Values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent Incompatible Values
// carMakers.push(123); //! Error!

// Helper Function
carMakers.map((car: string): string => car.toUpperCase());

// Flexible Types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2010-10-10");
importantDates.push(new Date());
