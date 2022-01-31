const Dish = require("../dish/dish");
const SendText = require("../sendText");
const dotenv = require('dotenv')
dotenv.config()
class Order {
  constructor() {
    this.orderList = [];
    this.totalPrice = 0;
  }

  add(dish, amount = 1) {
    const newdish = { dish, amount };
    return this.orderList.push(newdish);
  }

  printOrder() {
    return this.orderList.map((order) => {
      return `${order.dish.name} x ${order.amount}`;
    });
  }

  total() {
    this.orderList.map((order) => {
      this.totalPrice += order.dish.price * order.amount;
    });
    return "£ " + this.totalPrice;
  }

  // placeOrder() {
  //   const accountSid = process.env.TWILIO_ACCOUNT_SID
  //   const authToken = process.env.TWILIO_AUTH_TOKEN     //twilio error: username is required
  //   const text = new SendText(accountSid,authToken)
  //   text.send()
  // }
}

module.exports = Order;

const o = new Order()
o.add(new Dish('Beef Burger', 7), 2)
o.add(new Dish('Lasagna & Salad', 15))
o.add(new Dish('Fish and Chips', 13), 2)
o.placeOrder()

console.log(o.printOrder())
console.log(o.total())


