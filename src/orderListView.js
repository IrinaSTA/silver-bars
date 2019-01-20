function OrderListView(orderList) {
  this.orderList = orderList;
}

OrderListView.prototype.renderLive = function () {
  var orderViews = document.createElement('ul');
  this.orderList.getLive().forEach(function(order) {
    var orderView = new OrderView(order);
    var node = orderView.renderListItem();
    orderViews.appendChild(node);
  })
  return orderViews;
}
