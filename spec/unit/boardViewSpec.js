describe('BoardView', function () {

  beforeEach(function () {
    orderList = new OrderList();
    orderList.add(orderMock);
    orderList.add(orderMock);
    board = boardMock();
    boardView = new BoardView(board);
    boardView.orderListView = orderListView;
  })
})
