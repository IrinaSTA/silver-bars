(function(exports) {
  function OrderSummaryView(orderSummary) {
    this.orderSummary = orderSummary;
  }

  OrderSummaryView.prototype.renderAll = function() {
    var orderSummaries = document.createElement('ul');
    var summaries = Object.values(this.orderSummary.all);
    summaries.forEach(function(summary) {
      var node = renderSummaryLine(summary);
      orderSummaries.appendChild(node);
    })
    return orderSummaries;
  }

  function renderSummaryLine(summary) {
    var li = document.createElement("LI");
    var node = document.createTextNode(`${summary.quantity} kg for ${formatPrice(summary.price)} (${summary.type})`);
    li.appendChild(node);
    return li;
  }

  function formatPrice(price) {
    return price.toFixed(2);
  }

  exports.OrderSummaryView = OrderSummaryView;
})(this);
