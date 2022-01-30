const { expect } = require("@jest/globals");
const Dish = require("./dish/dish");
const Order = require("./order");
describe("Order class", () => {
  const order = new Order();
  const dish1 = { name: "Beef Burger", price: 7 };
  const dish2 = { name: "Fish & Chips", price: 13 };
  const dish3 = { name: "Lasagna & Salad", price: 15 };
  it("starts with an empty order list", () => {
    expect(order.orderList).toBeNull;
  });

  it("can add dish to the order list", () => {
    order.add("Beef Burger");
    expect(order.orderList[0]["dish"]).toEqual("Beef Burger");
  });

  it("can add several of the same dish and several different dishes", () => {
    order.orderList.pop();
    order.add("Lasagna & Salad");
    order.add("Fish & Chips", 3);
    expect(order.orderList[0]).toEqual({ dish: "Lasagna & Salad", amount: 1 });
    expect(order.orderList[1]).toEqual({ dish: "Fish & Chips", amount: 3 });
  });

  it("prints the order summary", () => {
    order.orderList.pop();
    order.orderList.pop();
    order.add("Fish & Chips", 3);
    order.add("Beef Burger");
    expect(order.printOrder()).toEqual(["Fish & Chips x 3", "Beef Burger x 1"]);
  });

  it("returns the total price of order", () => {
    const order1 = new Order();
    order1.add(dish1, 2);
    order1.add(dish2, 1);
    order1.add(dish3, 1);
    expect(order1.total()).toEqual(42);
  });
});
