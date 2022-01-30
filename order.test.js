const { expect } = require("@jest/globals");
const Order = require("./order");
describe("Order class", () => {
    const order = new Order();
    const dish = {name: 'Beef Burger', price: 7}
  it("starts with an empty order list", () => {
   
    expect(order.orderList).toBeNull;
  });

  it('can add dish to the order list', () => {
    order.add(dish)
    expect(order.orderList[0]).toEqual({name: 'Beef Burger', price: 7})
  })
});
