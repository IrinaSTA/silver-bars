function BoardView(board) {
  this.board = board;
}

BoardView.prototype.displayOrder = function(order) {
  var orderView = new OrderView(order); // hard to isolate in tests
  var listItem = document.createElement('li');
  var order = document.createTextNode(orderView.render());
  listItem.appendChild(order);
  var element = document.getElementById('live-orders');
  element.appendChild(listItem);
}
