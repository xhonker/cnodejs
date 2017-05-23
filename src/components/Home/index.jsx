import React, { Component } from 'react';

class Home extends Component {
    render() {
        const { testClick, hidden } = this.props;
        console.log(hidden)
        return (
            <div>
                <button onClick={testClick}>按钮</button>
                <div>{hidden}</div>
            </div>
        );
    }
}

export default Home;