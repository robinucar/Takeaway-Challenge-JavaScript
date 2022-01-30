const { expect } = require("@jest/globals");
const Order = require("./order");
describe("Order class", () => {
    const order = new Order();
  it("starts with an empty order list", () => {
   
    expect(order.orderList).toBeNull;
  });

  it('can add dish to the order list', () => {
    order.add('Beef Burger')
    expect(order.orderList[0]['dish']).toEqual('Beef Burger')
  })

  it('can add several of the same dish and several different dishes', () => {
      order.orderList.pop()
      order.add('Lasagna & Salad')
      order.add('Fish & Chips', 3)
      expect(order.orderList[0]).toEqual({dish: 'Lasagna & Salad', amount: 1})
      expect(order.orderList[1]).toEqual({dish: 'Fish & Chips', amount: 3})
  })

  it('prints the order summary', () => {
    order.orderList.pop()
    order.orderList.pop()
    order.add('Fish & Chips', 3)
    order.add('Beef Burger')
    expect(order.printOrder()).toEqual(['Fish & Chips x 3','Beef Burger x 1'])
  })
});
