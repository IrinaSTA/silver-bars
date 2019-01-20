describe('OrderView', function () {
  let orderView;

  beforeEach(function () {
    let order = liveBidMock();
    orderView = new OrderView(order);
  });

  describe('#render', function () {
    it('returns a formatted orders string', function () {
      const html = orderView.render();
      expect(html).toEqual('Bid 100 567.00');
    });
  });

  describe('#renderListItem', function () {
    it('return an html list item with an order', function () {
      const htmlListItem = orderView.renderListItem();
      // a list item has nodeType 1
      expect(htmlListItem.nodeType).toEqual(1);
      expect(htmlListItem.innerHTML).toEqual('Bid 100 567.00');
    })
  })
});
