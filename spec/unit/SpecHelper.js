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

  function orderSummaryMock() {
    return {
      bid567: {
        type: 'bid',
        price: 567.00,
        quantity: 100,
      }
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
  exports.orderSummaryMock = orderSummaryMock;
  exports.boardViewMock = boardViewMock;
})(this);
