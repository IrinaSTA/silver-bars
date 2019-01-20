describe('BoardView', function () {

  beforeEach(function () {
    // orderListView = orderListViewMock();
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
      // spyOn(orderListView, 'renderLive').and.returnValue('<ul><li>Bid 100 567.00</li><li>Bid 100 567.00</li></ul>')
      boardView.renderList();
      expect(elementMock.innerHTML).toEqual("<ul><li>Bid 100 567.00</li><li>Bid 100 567.00</li></ul>");
    })
  })
})
