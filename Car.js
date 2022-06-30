let cars = [
  {
    LicensePlate: "1กข 4687 ชัยนาท",
    model: "Model Y",
    brand: "Tesla",
    type: "Electric car",
    price: 2990000,
    cost: 2000000,
  },
  {
    LicensePlate: "ชน 3321 ภูเก็ต",
    model: "X5",
    brand: "BMW",
    type: "Electric car",
    price: 4990000,
    cost: 4000000,
  },
  {
    LicensePlate: "คห 4687 กระบี่",
    model: "X3",
    brand: "BMW",
    type: "Hybrid car",
    price: 3799000,
    cost: 300000,
  },
  {
    LicensePlate: "ขช 0402 ขอนแก่น",
    model: "EQS",
    brand: "Benz",
    type: "Electric car",
    price: 8600000,
    cost: 8000000,
  },
  {
    LicensePlate: "วส 0487 เขียงใหม่",
    model: "Camry",
    brand: "Toyota",
    type: "General car",
    price: 1200000,
    cost: 700000,
  },
  {
    LicensePlate: "ยว 4500 สงขลา",
    model: "Civic",
    brand: "Honda",
    type: "Electric car",
    price: 900000,
    cost: 500000,
  },
  {
    LicensePlate: "สน 9504 อ่างทอง",
    model: "X7",
    brand: "BMW",
    type: "Electric car",
    price: 6900000,
    cost: 6000000,
  },
  {
    LicensePlate: "จภ 0498 กทม",
    model: "GLC",
    brand: "Benz",
    type: "Electric car",
    price: 4900000,
    cost: 4000000,
  },
  {
    LicensePlate: "นส 9553 พิจิตร",
    model: "Vigo",
    brand: "Toyato",
    type: "General car",
    price: 700000,
    cost: 400000,
  },
  {
    LicensePlate: "สด 0438 เลย",
    model: "Mazda3",
    brand: "Mazda",
    type: "General car",
    price: 1200000,
    cost: 700000,
  },
];


let sumCost = 0;
let sumPrice = 0;
for (let i = 0; i < cars.length; i++) {
  sumCost += cars[i].cost;
  sumPrice += cars[i].price;
}

console.log("Total cost of cars = " + sumCost);
console.log("Total price of cars = " + sumPrice);

console.log("AVG of cost "+sumCost/(cars.length))
console.log("AVG of price "+sumPrice/(cars.length))

let First_Last_car = 0
console.log("---------Selling 10% 0ff----------")
for(let i = 0;i <cars.length;i++){
  console.log((i+1)+" "+cars[i].model+" "+cars[i].brand+" ------Selling 10% off "+(cars[i].price * 0.9)+"------" )
  First_Last_car = cars[0].price + cars[cars.length-1].price
}

console.log("Total First and Last car "+First_Last_car)

