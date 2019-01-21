describe('OrderSummary', function() {
  let orderSummary;
  let orderList;
  let order;

  beforeEach(function() {
    order1 = liveBidMock();
    order2 = liveAskMock();
    orderSummary = new OrderSummary();
    orderSummary.add(order1);
    orderSummary.add(order1);
    orderSummary.add(order2);
  })

  describe('#process', function () {
    it('converts order object to summary format', function () {
      expect(orderSummary.process(order1)).toEqual({bid567: { type: 'bid', price: 567.00, quantity: 100 }})
    })
  })

  describe('#add', function () {
    it('updates summary for new live order', function () {
      expect(orderSummary.all).toEqual({bid567: { type: 'bid', price: 567.00, quantity: 200 }, ask667: { type: 'ask', price: 667.00, quantity: 100 }})
    })
  })
})
