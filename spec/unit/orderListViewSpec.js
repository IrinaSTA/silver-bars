describe('OrderListView', function () {
  let orderlistView;
  let orderList;

  beforeEach(function () {
    orderMock = { userid: '5678', quantity: 50, price: 567.00, type: 'bid', live: true };
    // orderList = [orderMock, orderMock];
    orderList = new OrderList();
    orderList.add(orderMock);
    orderList.add(orderMock);
    orderListView = new OrderListView(orderList);
    spyOn(orderListView, 'orders').and.returnValue([orderMock, orderMock]);
  })

  describe('#render', function () {
    it('renders a list of orders', function () {
      expect(orderListView.renderLive()).toEqual('<li>Bid 50 567.00</li><li>Bid 50 567.00</li>')
    })
  })
})
