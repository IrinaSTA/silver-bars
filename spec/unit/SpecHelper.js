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

  function liveAskMock() {
    return {
      userid: '1234',
      quantity: 100,
      price: 667.00,
      type: 'ask',
      live: true,
    }
  }

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

  function boardViewMock() {
    return {
      orderListView: orderListViewMock(),
    }
  }

  exports.liveBidMock = liveBidMock;
  exports.liveAskMock = liveAskMock;
  exports.cancelledBidMock = cancelledBidMock;
  exports.orderViewMock = orderViewMock;
  exports.orderListMock = orderListMock;
  exports.orderListViewMock = orderListViewMock;
  exports.boardMock = boardMock;
  exports.boardViewMock = boardViewMock;
})(this);
