describe('OrderList', function () {
  let orderList;

  beforeEach(function () {
    orderList = new OrderList();
    orderMock = { userid: '5678', quantity: 50, price: 567.00, type: 'bid', live: true };
    orderList.add(orderMock);
  })

  describe('#add', function () {
    it('can add an order to itself', function () {
      expect(orderList.all[0]).toEqual(orderMock);
    })
  })

  describe('#cancel', function () {
    it('can cancel an order', function () {
      orderList.cancel(orderMock);
      expect(orderList.all).toEqual([])
    })
  })

  describe('#live', function () {
    it('returns a list of live orders only', function () {
      cancelledOrderMock = { userid: '1234', quantity: 100, price: 567.00, type: 'bid', live: false };
      orderList.add(cancelledOrderMock);
      expect(orderList.getLive()).toEqual([orderMock])
    })
  })
})
