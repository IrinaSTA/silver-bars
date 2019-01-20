function OrderList() {
  this.all = [];
}

OrderList.prototype.add = function (order) {
  this.all.push(order);
}

OrderList.prototype.cancel = function (order) {
  order.live = false;
  var index = this.all.indexOf(order);
  this.all.splice(index, 1);
}

OrderList.prototype.getLive = function () {
  return this.all.filter(order => order.live === true);
}
