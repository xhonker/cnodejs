import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd-mobile';
import getTime from '../../../../utils/GetTime';
import './index.less';
class Author extends Component {
    render() {
        const { author } = this.props; 
        return (
            <div className='author-info'>
                <Card full>
                    <Card.Header thumb={author.author.avatar_url} title={author.author.loginname} extra={`发布于${getTime.getTime(new Date(), author.create_at)}`} />
                   
                    <Card.Footer content={`阅读：${author.visit_count}  回复：${author.replies.length}`} extra={<div>点击关注</div>} />
                </Card>
            </div>
        );
    }
}

Author.propTypes = {
    author: PropTypes.object.isRequired
};

export default Author;