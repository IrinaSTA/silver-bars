function OrderListView(orderList) {
  this.orders = orderList;
}

OrderListView.prototype.renderLive = function () {
  var orderViews = document.createElement('ul');
  this.orders.getLive().forEach(function(order) {
    var orderView = new OrderView(order);
    var node = orderView.renderListItem();
    orderViews.appendChild(node);
  })
  return orderViews;
}
