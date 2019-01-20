$(document).ready(function () {
  const board = new Board(new OrderList());
  const boardView = new BoardView(board);

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
    board.add(order);
    boardView.addOrder(orderView);
  })
})
