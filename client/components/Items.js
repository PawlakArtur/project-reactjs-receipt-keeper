import React from 'react';

const Items = React.createClass({
    renderItem(item, i) {
        return (
            <div key={i}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Amount: {item.amount}</p>
                <p>Price: {item.price * item.amount}</p>
            </div>
        )
    },
    render() {
        return (
            <div>
                {this.props.receiptItems.map(this.renderItem)}
            </div>
        )
    }
});

export default Items;