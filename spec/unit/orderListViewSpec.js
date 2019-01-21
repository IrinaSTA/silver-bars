describe('OrderListView', function () {
  let orderlistView;
  let orderList;

  beforeEach(function () {
    orderMock = liveBidMock();
    orderList = new OrderList();
    orderList.add(orderMock);
    orderList.add(orderMock);
    orderListView = new OrderListView(orderList);
  })

  describe('#renderLive', function () {
    it('renders a list of live orders', function () {
      var html = orderListView.renderLive();
      // nodeType of 1 stands for Element
      expect(html.nodeType).toEqual(1);
      expect(html.innerHTML).toEqual('<li>Bid: 100 kg for 567.00</li><li>Bid: 100 kg for 567.00</li>')
    })
  })
})
