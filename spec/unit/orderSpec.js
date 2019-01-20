describe('Order', function () {
  let bidOrder;

  beforeEach(function () {
    bidOrder = new Order('1234', 100, 567.00, 'bid');
  });

  it('should have user id, quantity, price and order type', function () {
    expect(bidOrder.userid).toEqual('1234');
    expect(bidOrder.quantity).toEqual(100);
    expect(bidOrder.price).toEqual(567.00);
    expect(bidOrder.type).toEqual('bid');
    expect(bidOrder.live).toEqual(true);
  });
});
