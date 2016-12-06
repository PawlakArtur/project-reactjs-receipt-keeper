import React from 'react';
import { Link } from 'react-router';

const ReceiptInformation = React.createClass({
    render() {
        const { receipt, i, items } = this.props;
        return (
            <div className="receipt">
                <Link to={`/view/${receipt.code}`}>
                    <h3>{receipt.title}</h3>
                    <p>{receipt.shop}</p>
                    <p>{receipt.date}</p>
                    <p>Number of purchases items {items[receipt.id] ? items[receipt.id].length : 0}</p>
                </Link>
            </div>
        )
    }
});

export default ReceiptInformation;