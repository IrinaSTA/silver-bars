(function(exports) {
  function liveBidMock() {
    return {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
      live: true,
    }
  };

  function cancelledBidMock() {
    return {
      userid: '1234',
      quantity: 100,
      price: 567.00,
      type: 'bid',
      live: false,
    }
  }

  function orderViewMock() {
    return {
      order: liveBidMock(),
    }
  }

  function orderListMock() {
    return {
      all: [liveBidMock(), liveBidMock()],
    }
  }

  function orderListViewMock() {
    return {
      orders: orderListMock(),
    }
  }

  function boardMock() {
    return {
      orderList: orderListMock(),
    }
  }

  exports.liveBidMock = liveBidMock;
  exports.cancelledBidMock = cancelledBidMock;
  exports.orderViewMock = orderViewMock;
  exports.orderListMock = orderListMock;
  exports.orderListViewMock = orderListViewMock;
  exports.boardMock = boardMock;
})(this);
