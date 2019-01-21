describe('OrderSummaryView', function () {
  let orderSummary;
  let orderSummaryView;

  beforeEach(function () {
    order = new Order('1234', 100, 567.00, 'bid')
    orderSummary = new OrderSummary();
    orderSummary.add(order);
    orderSummaryView = new OrderSummaryView(orderSummary);
  })

  describe('#renderAll', function () {
    it('renders a list of order summaries', function() {
      var html = orderSummaryView.renderAll();
      expect(html.nodeType).toEqual(1);
      expect(html.innerHTML).toEqual('<li>100 kg for 567.00 (bid)</li>')
    })
  })
})
