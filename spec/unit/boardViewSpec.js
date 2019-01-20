describe('BoardViewSpec', function () {
  let orderMock;
  let orderView;
  let divMock;
  let boardViewMock;
  let boardMock;

  beforeEach(function () {
    orderMock = {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
    };
    orderView = "Bid 100 567.00";
    boardMock = { orders: [orderMock] };
    boardViewMock = new BoardView(boardMock);
  })

  describe('#displayOrder', function () {
    it('can add an order to a document element', function () {
      var elementMock = document.createElement('div');
      spyOn(document, 'getElementById').and.returnValue(elementMock);
      boardViewMock.displayOrder(orderMock);
      console.log(elementMock.innerHTML);
      expect(elementMock.innerHTML).toEqual("<li>Bid 100 567.00</li>");
    })
  })
})
