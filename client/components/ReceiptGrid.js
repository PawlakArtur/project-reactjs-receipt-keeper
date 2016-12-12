import React from 'react';
import ReceiptInformation from './ReceiptInformation';

const ReceiptGrid = React.createClass({
    handleAddReceipt(e) {
        e.preventDefault();
        const id = (this.props.receipts.length > 0) ? (this.props.receipts[this.props.receipts.length - 1].id + 1) : 0;
        const title = this.refs.title.value;
        const shop = this.refs.shop.value;
        const address = this.refs.address.value;
        const date = this.refs.date.value;
        const code = this.refs.code.value;
        this.props.addReceipt(id, title, shop, address, date, code);
        this.refs.receiptForm.reset();
    },
    render() {
        return (
            <div className="receipts-grid">
                <h2>Receipts:</h2>
                <div>
                    <p>Add new product:</p>
                    <form ref="receiptForm" onSubmit={this.handleAddReceipt}>
                        <input type="text" ref="title" placeholder="title"/>
                        <input type="text" ref="shop" placeholder="shop"/>
                        <input type="address" ref="address" placeholder="address"/>
                        <input type="text" ref="date" placeholder="date"/>
                        <input type="text" ref="code" placeholder="code"/>
                        <input type="submit" hidden/>
                    </form>
                </div>
                {this.props.receipts.map((receipt, i) => <ReceiptInformation {...this.props} key={i} i={i} receipt={receipt} />)}
            </div>
        )
    }
});

export default ReceiptGrid;