import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd-mobile';
class Author extends Component {
    render() {
        const { author } = this.props;
        return (
            <div>

            </div>
        );
    }
}

Author.propTypes = {
    author: PropTypes.object.isRequired
};

export default Author;