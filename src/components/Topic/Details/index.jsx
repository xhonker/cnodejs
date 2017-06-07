import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WhiteSpace, Card } from 'antd-mobile';
import './index.less';
class Test extends Component {
    render() {
        const { item } = this.props;
        console.log(item);
        console.log(typeof item.replies);
        if (item.reply_count) {
            return (
                <div style={{ marginTop: '90px' }}>
                    <div className='details_body' dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    <div>
                        <h3>{item.reply_count}条评论</h3>
                        {item.replies.map((index, key) => {
                            console.log(index);
                        })}
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            )
        }

    }
}

Test.propTypes = {

};

export default Test;