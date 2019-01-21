describe('OrderSummary', function() {
  let orderSummary;
  let orderList;
  let order;

  beforeEach(function() {
    order = liveBidMock();
    orderSummary = new OrderSummary();
  })

  describe('#process', function () {
    it('converts order object to summary format', function () {
      expect(orderSummary.process(order)).toEqual({bid567: { type: 'bid', price: 567.00, quantity: 100 }})
    })
  })

  describe('#add', function () {
    it('updates summary for new live order', function () {
      orderSummary.add(order);
      expect(orderSummary.summary).toEqual({ bid567: { type: 'bid', price: 567, quantity: 100 } })
      orderSummary.add(order);
      expect(orderSummary.summary).toEqual({bid567: { type: 'bid', price: 567.00, quantity: 200 }})
    })
  })
})
