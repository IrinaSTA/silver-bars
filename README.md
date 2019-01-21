## Overview

This is a one-page app implemented in Javascript.  It allows the user to place
buy and sell orders and view order summaries.

![feature](/public/images/board.png)

## What I would do next

- Finish isolating tests for OrderListView, OrderSummaryView and BoardView
- Include one missing test for BoardView
- Implement cancel orders feature, most likely by implementing a unique order id, that can be used to identify the order being cancelled, so that it can be removed from list of live orders and order summaries can then be recalculated
- Separate order summaries into Bids and Asks, by implementing getBids and getAsks methods in orderSummary, and corresponding rendering methods in orderSummaryView. Sort each by price, ascending for Asks, and descending for Bids

## To use

Clone the repo, navigate to the directory, and open index.html in your browser.

## To run tests

Feature tests are written in Cypress, units tests are written in Jasmine.

To run feature tests, while in project directory, enter the following in your
terminal:

```
./node_modules/.bin/cypress open
```

To view unit tests, go to jasmine-standalone-3.2.1 folder and open SpecRunner.html
in your browser.

Test results are copied here:

![feature](/public/images/feature_tests.png)

![unit](/public/images/unit_tests.png)
