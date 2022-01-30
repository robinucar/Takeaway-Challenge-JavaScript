
const Dish = require('./dish/dish')
class Order {
  constructor() {
    this.orderList = [];
  }

  add(dish, amount = 1) {
    dish = {dish, amount}
    return this.orderList.push(dish);
  }
}

module.exports = Order;

// const o = new Order()
// o.add('Beef Burger', 1)
// o.add('Fish & Chips',2)
// o.add('Lasagna & Salad', 3)
// console.log(o.orderList)