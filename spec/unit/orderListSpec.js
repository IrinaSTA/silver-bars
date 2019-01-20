describe('OrderList', function () {
  let orderList;

  beforeEach(function () {
    orderList = new OrderList();
    liveOrder = liveBidMock();
    orderList.add(liveOrder);
  })

  describe('#add', function () {
    it('can add an order to itself', function () {
      expect(orderList.all[0]).toEqual(liveOrder);
    })
  })

  describe('#cancel', function () {
    it('can cancel an order', function () {
      orderList.cancel(liveOrder);
      expect(orderList.all).toEqual([])
    })
  })

  describe('#live', function () {
    it('returns a list of live orders only', function () {
      cancelledOrder = cancelledBidMock();
      orderList.add(cancelledOrder);
      expect(orderList.getLive()).toEqual([liveOrder])
    })
  })
})
