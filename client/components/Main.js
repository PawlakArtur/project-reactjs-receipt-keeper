import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <main>
                <h1>
                    <Link to="/">Receipt Keeper</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
});

export default Main;