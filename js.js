class Restaurant {
  constructor(name, cusineType, served) {
    this.name = name;
    this.cusineType = cusineType;
    this.served = served;
  }

  showInfo() {
    return `${this.name} is a restaurant of ${this.cusineType} meal.`;
  }

  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }
  serve(){
    return this.served ++;
    }
   set setServed(value){
     return this.served += value;
   }
   showTotalServed(){
     return this.served;
   }
}

const beshBarmak = new Restaurant ('Besh Barmak', 'kyrgyz', 0);

console.log(beshBarmak);
console.log(beshBarmak.showInfo());

console.log(beshBarmak.isOpen());
console.log(beshBarmak.serve());
console.log(beshBarmak.serve());
console.log(beshBarmak.setServed = 20);
console.log(beshBarmak.showTotalServed());
