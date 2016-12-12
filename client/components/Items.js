import React from 'react';

const Items = React.createClass({
    renderItem(item, i) {
        return (
            <div className="item" key={i}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Amount: {item.amount}</p>
                <p>Price: {item.price * item.amount}</p>
                <button onClick={this.props.removeItem.bind(null, this.props.i, i)}>&times;</button>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        const receiptId = this.props.i;
        const name = this.refs.name.value;
        const price = this.refs.price.value;
        const amount = this.refs.amount.value;
        this.props.addItem(receiptId, name, price, amount);
        this.refs.itemForm.reset();
    },
    render() {
        return (
            <div className="item-list">
                <p>Add new product:</p>
                <form ref="itemForm" onSubmit={this.handleSubmit}>
                    <input type="text" ref="name" placeholder="name"/>
                    <input type="number" ref="price" placeholder="price"/>
                    <input type="number" ref="amount" placeholder="amount"/>
                    <input type="submit" hidden />
                </form>
                <p>List of products:</p>
                {this.props.receiptItems.map(this.renderItem)}
            </div>
        )
    }
});

export default Items;