class Cars {
  constructor(brand, year, enginePower, color){
    this.brand = brand;
    this.year = year;
    this.enginePower = enginePower;
    this.color = color;
  }
 showInfo(){
   return `Brand of car: ${this.brand},
    Year of manufacture: ${this.year}, 
    Engine power: ${this.enginePower}, 
    Car's color: ${this.color}`
 } 

}
class ElectroCars extends Cars {
  constructor (brand, year, enginePower, color, accumulatorUnit){
    super(brand, year, enginePower, color);
    this.accumulatorUnit = accumulatorUnit;
  }
  showInfo(){
   return super.showInfo() + ' Accumulator unit: '   +  this.accumulatorUnit;
  }  

  promote(){
    return `Sale, rental and maintenance of electric vehicles. Charging stations and accessories. Delivery of cars from the USA: ${this.showInfo()}`
  }

}

const cars = new Cars('Cars', '2022', ' 400 kW', 'Red');

console.log(cars.showInfo());

const electroCars = new ElectroCars('ElectroCars', '2022', ' 400 kW', 'White', '300 kWh');
console.log(electroCars.showInfo());

console.log(electroCars.promote());