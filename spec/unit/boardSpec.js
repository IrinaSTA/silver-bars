describe('Board', function () {
  let board;
  let orderList;
  let orderMock;

  beforeEach(function () {
    orderMock = {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
    };
    orderList = new OrderList();
    orderList.add(orderMock);
    board = new Board(orderList);
  });

  describe('#add', function () {
    it('adds an order to its list of orders', function() {
      board.add(orderMock);
      console.log(board.orderList);
      expect(board.orderList.all.length).toEqual(2);
    });
  });
});
