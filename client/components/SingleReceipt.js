import React from 'react';
import ReceiptInformation from './ReceiptInformation';
import Items from './Items';

const SingleReceipt = React.createClass({
    render() {
        const i = this.props.receipts.findIndex((receipt) => receipt.code === this.props.params.receiptId);
        const receipt = this.props.receipts[i];
        const receiptItems = this.props.items[i] || [];
        return (
            <div className="receipt-details">
                <ReceiptInformation i={i} receipt={receipt} {...this.props}/>
                <Items receiptItems={receiptItems}  {...this.props} i={i}/>
            </div>
        )
    }
});

export default SingleReceipt;