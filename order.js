const Dish = require("./dish/dish");
class Order {
  constructor() {
    this.orderList = [];
    this.totalPrice = 0;
  }

  add(dish = new Dish.getName(), amount = 1) {
    const newdish = { dish, amount };
    return this.orderList.push(newdish);
  }

  printOrder() {
    return this.orderList.map((order) => {
      return `${order.dish} x ${order.amount}`;
    });
  }

  total() {
    this.orderList.map((order) => {
      this.totalPrice += order.dish.price * order.amount;
    });
    return this.totalPrice;
  }
}

module.exports = Order;
