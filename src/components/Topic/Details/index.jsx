import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WhiteSpace, Card } from 'antd-mobile';
import Comment from './comment/index';
import Author from './author/index';
import './index.less';
class Test extends Component {
    render() {
        const { item } = this.props;
        if (item.reply_count) {
            return (
                <div style={{ marginTop: '90px' }}>
                    <Author author={item}/>
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

Test.propTypes = {
    item: PropTypes.object.isRequired
};

export default Test;