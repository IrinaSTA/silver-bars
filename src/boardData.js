function Board() {
  this.orders = [];
}

Board.prototype.add = function (order) {
  this.orders.push(order);
};
