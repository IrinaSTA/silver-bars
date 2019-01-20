(function(exports) {
  function OrderView(order) {
    this.order = order;
  }

  OrderView.prototype.render = function () {
    return `${this.orderType()} ${this.order.quantity} ${this.orderPrice()}`;
  };

  OrderView.prototype.renderListItem = function () {
    var li = document.createElement("LI");
    var node = document.createTextNode(this.render());
    li.appendChild(node);
    return li;
  }

  OrderView.prototype.orderType = function () {
    return this.order.type.replace(/^\w/, c => c.toUpperCase());
  };

  OrderView.prototype.orderPrice = function () {
    return this.order.price.toFixed(2);
  };
  
  exports.OrderView = OrderView;
})(this);
