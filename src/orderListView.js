function OrderListView(orderList) {
  this.orders = orderList;
}

OrderListView.prototype.renderLive = function () {
  var orderViews = ''
  this.orders.getLive().forEach(function(order) {
    var orderView = new OrderView(order);
    orderViews += orderView.renderListItem();
  })
  return orderViews;
}
