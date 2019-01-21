(function(exports) {
  function OrderSummary() {
    this.summary = {};
  }

  OrderSummary.prototype.add = function (order) {
    var newOrder = this.process(order);
    var key = Object.keys(newOrder)[0];
    if (this.summary.hasOwnProperty(key)) {
      var newQuantity = this.summary[key].quantity + order.quantity
      this.summary[key] = { type: order.type, price: order.price, quantity: newQuantity }
    } else {
      this.summary[key] = newOrder[key];
    }
  }

  OrderSummary.prototype.process = function(order) {
    var key = order.type + order.price;
    var obj = {};
    obj[key] = { type: order.type, price: order.price, quantity: order.quantity };
    return obj
  }

  exports.OrderSummary = OrderSummary;
})(this);
