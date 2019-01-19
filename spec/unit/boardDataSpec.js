describe('Board', function () {
  let board;
  let orderMock;

  beforeEach(function () {
    board = new Board();
    orderMock = {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
    };
  });

  describe('#add', function () {
    it('adds an order to its list of orders', function() {
      board.add(orderMock);
      expect(board.orders[0]).toEqual(orderMock);
    });
  });
});
