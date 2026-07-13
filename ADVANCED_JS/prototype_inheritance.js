function vehicle(brand ,color,price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
}
vehicle.prototype.running= function(){
    console.log(`Your ${this.brand} is running ....!`)
}

const car = new vehicle("Benz", "Black", "50cr");
const bike = new vehicle("Jawa", "Ash", '2.7L');

car.running();
bike.running();