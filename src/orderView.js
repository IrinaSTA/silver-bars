(function(exports) {
  function OrderView(order) {
    this.order = order;
  }

  OrderView.prototype.renderListItem = function () {
    var li = document.createElement("LI");
    var node = document.createTextNode(this.render());
    li.appendChild(node);
    var button = document.createElement('button')
    var buttonText = document.createTextNode('Cancel')
    button.appendChild(buttonText);
    li.appendChild(button);
    return li;
  }

  OrderView.prototype.render = function () {
    return `${this.orderType()}: ${this.order.quantity} kg for ${this.orderPrice()}`;
  };

  OrderView.prototype.orderType = function () {
    return this.order.type.replace(/^\w/, c => c.toUpperCase());
  };

  OrderView.prototype.orderPrice = function () {
    return this.order.price.toFixed(2);
  };

  exports.OrderView = OrderView;
})(this);
