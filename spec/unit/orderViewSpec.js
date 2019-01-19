describe("OrderView", function() {
  var orderMock, orderView, html;

  beforeEach(function() {
    // orderMock = new Order('1234', 100, 567.00, 'bid');
    orderMock = {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid'
    }
    orderView = new OrderView(orderMock);
  });

  describe("#render", function() {
    it('Returns an html representation of an order', function() {
      var html = orderView.render();
      expect(html).toEqual(`<div class='order'>Bid 100 567.00</div>`)
    });
  });
})
