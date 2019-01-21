describe('BoardView', function () {

  beforeEach(function () {
    order = new Order('1234', 100, 567.00, 'bid')
    orderView = new OrderView(order);
    orderList = new OrderList();
    boardView = new BoardView(orderList);
  })

  describe('#addOrder', function () {
    it('adds an order to list of orders on the board', function () {
      var div = document.createElement('div');
      spyOn(document, 'getElementById').and.returnValue(div);
      boardView.addOrder(orderView);
      expect(div.innerHTML).toEqual('<li>Bid: 100 kg for 567.00</li>');
    })
  })
})
