
const Order = require('./order')
describe('Order class', () => {
    
    it('starts with an empty order list', () => {
        const order = new Order()
        expect(order.orderList).toBeNull
    })
})

