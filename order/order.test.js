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
    const order1 = new Order();
    order1.add("Lasagna & Salad");
    order1.add("Fish & Chips", 3);
    expect(order1.orderList[0]).toEqual({ dish: "Lasagna & Salad", amount: 1 });
    expect(order1.orderList[1]).toEqual({ dish: "Fish & Chips", amount: 3 });
  });

  it("prints the order summary", () => {
    const order2 = new Order();
    order2.add("Fish & Chips", 3);
    order2.add("Beef Burger");
    expect(order2.printOrder()).toEqual([
      "Fish & Chips x 3",
      "Beef Burger x 1",
    ]);
  });

  it("returns the total price of order", () => {
    const order3 = new Order();
    order3.add(dish1, 2);
    order3.add(dish2, 1);
    order3.add(dish3, 1);
    expect(order3.total()).toEqual(42);
  });
});
