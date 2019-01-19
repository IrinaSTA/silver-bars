function OrderView(order) {
  this.order = order;
  this.element = null;
}

OrderView.prototype.render = function() {
  var content = `<div class='order'>${this.orderType()} ${this.order.quantity} ${this.orderPrice()}</div>`;
  this.element = content;
  return this.element;
}

OrderView.prototype.orderType = function() {
  return this.order.type.replace(/^\w/, c => c.toUpperCase());
}

OrderView.prototype.orderPrice = function() {
  return this.order.price.toFixed(2);
}
