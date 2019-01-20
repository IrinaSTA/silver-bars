function OrderView(order) {
  this.order = order;
}

OrderView.prototype.render = function () {
  return `${this.orderType()} ${this.order.quantity} ${this.orderPrice()}`;
};

OrderView.prototype.orderType = function () {
  return this.order.type.replace(/^\w/, c => c.toUpperCase());
};

OrderView.prototype.orderPrice = function () {
  return this.order.price.toFixed(2);
};
