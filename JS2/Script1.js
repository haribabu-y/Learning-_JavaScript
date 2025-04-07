const car = {
    name:"Thor",
    model:"roxx",
    price:1200000,
    color:"black",
  }

  car.brand = "Mahendra"

  car.carname = function() {
    return (this.brand +" "+ this.name).toUpperCase();
  }

  console.log(car["name"])
  console.log(car.model)
  console.log(car.price)
  console.log(car.color)
  console.log(car.carname())

  document.getElementById("demo").innerHTML = "My Car name is " + car.carname();