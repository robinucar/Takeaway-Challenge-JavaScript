const Dish = require("./dish/dish");

class Order {
  constructor() {
    this.orderList = [];
  }

  add(dish = new Dish()) {
    return this.orderList.push(dish);
  }
}

module.exports = Order;
