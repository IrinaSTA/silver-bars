(function(exports) {
  function OrderSummary() {
    this.all = {};
  }

  OrderSummary.prototype.add = function (order) {
    var newOrder = this.process(order);
    var key = Object.keys(newOrder)[0];
    if (this.all.hasOwnProperty(key)) {
      var newQuantity = this.all[key].quantity + order.quantity
      this.all[key] = { type: order.type, price: order.price, quantity: newQuantity }
    } else {
      this.all[key] = newOrder[key];
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
