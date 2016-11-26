import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import ReceiptGrid from './components/ReceiptGrid';
import SingleReceipt from './components/SingleReceipt';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

require("./styles/style.scss");

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ReceiptGrid}></IndexRoute>
                <Route path="/view/:receiptId" component={SingleReceipt}></Route>
            </Route>
        </Router>
    </Provider>
);


render(router, document.getElementById('root'));

