function Board(orderList) {
  this.orderList = orderList;
}

Board.prototype.add = function (order) {
  this.orderList.add(order);
};
