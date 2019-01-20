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

  exports.liveBidMock = liveBidMock;
  exports.cancelledBidMock = cancelledBidMock;
})(this);
