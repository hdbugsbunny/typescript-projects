const drink = { color: "brown", carbonated: true, sugar: 40 };

type DRINK = [string, boolean, number]; //* type alias for DRINK

const pepsi: DRINK = ["brown", true, 40];
// pepsi[0] = 40; //! Error
const sprite: DRINK = ["clear", true, 40];
const tea: DRINK = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = { horsepower: 400, weight: 3354 };
