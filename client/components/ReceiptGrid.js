import React from 'react';
import ReceiptInformation from './ReceiptInformation';

const ReceiptGrid = React.createClass({
    render() {
        return (
            <div className="receipts-grid">
                <h2>Receipts:</h2>
                <div>
                    <button onClick={this.props.addReceipt.bind(null)}>
                        Add new receipt
                    </button>
                </div>
                {this.props.receipts.map((receipt, i) => <ReceiptInformation {...this.props} key={i} i={i} receipt={receipt} />)}
            </div>
        )
    }
});

export default ReceiptGrid;