## Overview

This is a one-page app implemented in Javascript.  It allows the user to place
buy and sell orders and view order summaries.

This app was test driven using Cypress for feature tests and Jasmine for unit tests.

![feature](/public/images/board.png)

## What I wold do next

- Finish isolating tests for OrderListView, OrderSummaryView and BoardView
- Include missing tests for OrderSummaryView and BoardView
- Implement cancel orders feature, most likely by implementing a unique order id, that can be used to identify the order being cancelled
- Separate order summaries into Bids and Asks. Sort each by price, ascending for Asks, and descending for Bids
- Implement data validation for orders.

## To use

Clone the repo, navigate to the directory, and open index.html in your browser.

## To run tests

To run feature tests, while in project director, enter the following in your
terminal:

```
./node_modules/.bin/cypress open
```

To view unit tests, go to jasmine-standalone-3.2.1 folder and open SpecRunner.html
in your browser.

Test results are copied here:

![feature](/public/images/feature_tests.png)

![unit](/public/images/unit_tests.png)
