class Dish {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getName() {
      return this.name;
    }

    getPrice() {
        return this.price
    }
  
    printDish() {
      return `${this.name} : ${this.price}`;
    }
  }
  
  module.exports = Dish;

  // const dish = new Dish('Beef Burger', 7)
  // console.log(dish.getName())
  // console.log(dish.getPrice())
  // console.log(dish.printDish())