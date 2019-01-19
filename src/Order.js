function Order(userid, quantity, price, type) {
  this.userid = userid;
  this.quantity = quantity;
  this.price = price;
  this.type = type;
};

Order.prototype.userid = function() {
  this.userid;
}
