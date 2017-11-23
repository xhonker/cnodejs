import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace } from 'antd-mobile';
import './index.less';
import getTime from '../../../../utils/GetTime';
class Comment extends Component {
    render() {
        const { replies } = this.props;  
        return (
            <div className='comment'>
                <h3>共{replies.reply_count}条评论</h3>
                {replies.replies.map((index, key) => {
                    return (
                        <div key={key} style={{ backgroundColor: '#eee' }}>
                            <Card full>
                                <Card.Header title={index.author.loginname} thumb={index.author.avatar_url} extra={(key + 1) + '楼'} />
                                <Card.Body>
                                    <div dangerouslySetInnerHTML={{ __html: index.content }}></div>
                                </Card.Body>
                                <Card.Footer content={getTime.getTime(new Date(), index.create_at)} />
                            </Card>
                            <WhiteSpace size='md' />
                        </div>

                    )
                })}
            </div>
        );
    }
}

Comment.propTypes = {
    replies: PropTypes.object.isRequired
};

export default Comment;