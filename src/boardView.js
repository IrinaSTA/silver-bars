(function(exports) {
  function BoardView(board) {
    this.orderListView = new OrderListView(board.orderList);
  }

  BoardView.prototype.renderList = function() {
    var element = document.getElementById('live-orders');
    var node = this.orderListView.renderLive();
    element.appendChild(node);
  }

  BoardView.prototype.addOrder = function(orderView) {
    var element = document.getElementById('live-orders');
    var node = orderView.renderListItem();
    element.appendChild(node);
  }
  
  exports.BoardView = BoardView;
})(this);
