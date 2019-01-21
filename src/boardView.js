(function(exports) {
  function BoardView(orderList) {
    this.orderList = orderList;
    this.orderListView = new OrderListView(this.orderList);
  }

  BoardView.prototype.addOrder = function(orderView) {
    var element = document.getElementById('live-orders');
    var node = orderView.renderListItem();
    element.appendChild(node);
  }

  BoardView.prototype.updateSummaries = function(orderSummary) {
    var element = document.getElementById('order-summaries');
    if (element.childNodes.length !== 0) {
      element.removeChild(element.childNodes[0]);
    }
    var node = orderSummary.renderAll();
    element.appendChild(node);
  }

  exports.BoardView = BoardView;
})(this);
