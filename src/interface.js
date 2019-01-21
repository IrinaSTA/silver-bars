$(document).ready(function () {
  const boardView = new BoardView(new OrderList());
  const orderSummary = new OrderSummary();
  const orderSummaryView = new OrderSummaryView(orderSummary);

  $("input[type=submit]").on('click', function(event) {
    event.preventDefault();
    var userid = $("input[name=userid]").val();
    var quantity = parseInt($("input[name=quantity]").val());
    var price = parseFloat($("input[name=price]").val());
    var type = event.target.value;
    var form = document.getElementById('order-form');
    form.reset();
    var order = new Order(userid, quantity, price, type)
    var orderView = new OrderView(order);
    boardView.addOrder(orderView);
    orderSummary.add(order);
    boardView.updateSummaries(orderSummaryView);
  })
})
