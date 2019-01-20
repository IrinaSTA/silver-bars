describe('OrderView', function () {
  let orderMock;
  let orderView;

  beforeEach(function () {
    orderMock = {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
    };
    orderView = new OrderView(orderMock);
  });

  describe('#render', function () {
    it('returns an html representation of an order', function () {
      const html = orderView.render();
      expect(html).toEqual("Bid 100 567.00");
    });
  });

  describe('#renderListItem', function () {
    it('return an html list item with an order', function () {
      const htmlListItem = orderView.renderListItem();
      expect(htmlListItem).toEqual('<li>Bid 100 567.00</li>');
    })
  })
});
