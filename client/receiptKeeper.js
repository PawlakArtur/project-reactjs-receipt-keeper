import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';
import ReceiptGrid from './components/ReceiptGrid';
import SingleReceipt from './components/SingleReceipt';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

require("./styles/style.scss");

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={ReceiptGrid}></IndexRoute>
            <Route path="/view/:receiptId" component={SingleReceipt}></Route>
        </Route>
    </Router>
);


render(router, document.getElementById('root'));

