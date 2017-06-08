import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WhiteSpace, Card } from 'antd-mobile';
import Comment from './comment/index';
import Author from './author/index';
import './index.less';
class Details extends Component {
    render() {
        const { item } = this.props;
        if (item.reply_count >= 0) {
            return (
                <div style={{ marginTop: '90px' }}>
                    <Author author={item} />
                    <div className='details_body' dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    <Comment replies={item} />
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }

    }
}

Details.propTypes = {
    item: PropTypes.object.isRequired
};

export default Details;