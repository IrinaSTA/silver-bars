describe('BoardView', function () {

  beforeEach(function () {
    orderList = new OrderList();
    orderList.add(orderMock);
    orderList.add(orderMock);
    board = boardMock();
    boardView = new BoardView(board);
    boardView.orderListView = orderListView;
  })

  describe('#renderList', function () {
    it('can render a list of orders', function () {
      var elementMock = document.createElement('div');
      spyOn(document, 'getElementById').and.returnValue(elementMock);
      boardView.renderList();
      expect(elementMock.innerHTML).toEqual("<ul><li>Bid: 100 kg for 567.00</li><li>Bid: 100 kg for 567.00</li></ul>");
    })
  })
})
