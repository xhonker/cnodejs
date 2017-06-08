import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { List, Icon, Card, WhiteSpace, WingBlank } from 'antd-mobile';
import PropTypes from 'prop-types';
import tool from '../../../utils/GetTime';

const ListItem = List.Item;
const Brief = ListItem.Brief;
import './style/index.less';
class TopicList extends Component {
    render() {
        const { onScrolls, state } = this.props;
        return (
            <div
                style={{ height: document.documentElement.clientHeight - 276, overflow: 'auto' }}
                onScroll={
                    () => onScrolls(ReactDOM.findDOMNode(this.refs.listDiv), ReactDOM.findDOMNode(this.refs.listItem))
                }
                ref="listDiv"
            >
                <List ref='listItem'>
                    {
                        state.map((index, key) => {
                            return (
                                <div style={{ backgroundColor: '#eee' }} key={key}>
                                    <WingBlank size='md'>
                                        <WhiteSpace size='md' />
                                        <Link key={index.id} to={`/details/${index.id}`} style={{ display: 'block' }}>
                                            <Card full>
                                                <Card.Header thumb={index.author.avatar_url} title={
                                                    <div>
                                                        <div>
                                                            {index.author.loginname}
                                                        </div>
                                                        <span
                                                            style={{ marginTop: '10px' }}
                                                        >
                                                            {tool.getTime(new Date(), index.create_at)}
                                                            {
                                                                `发布至 ${tool.getTab(index.tab)}`
                                                            }
                                                        </span>
                                                    </div>
                                                } />
                                                <Card.Body>
                                                    <span>{index.title}</span>
                                                </Card.Body>
                                                <Card.Footer content={
                                                    <div className='listItem-Base'>
                                                        <div className='listItem-body listItem_borderRight' >
                                                            <Icon type={require('../../../static/image/attention.svg')} size='xxs' />
                                                            <span>{index.visit_count}</span>
                                                        </div>
                                                        <div className='listItem-body listItem_borderRight'>
                                                            <Icon type={require('../../../static/image/comment.svg')} size='xxs' />
                                                            <span>{index.reply_count}</span>
                                                        </div>
                                                        <div className='listItem-body'>{tool.getTime(new Date(), index.last_reply_at)}</div>
                                                    </div>
                                                } />

                                            </Card>
                                        </Link>
                                    </WingBlank>
                                </div>
                            )
                        })
                    }
                    <div style={{ textAlign: 'center' }}><Icon type='loading' /></div>
                </List>
            </div>
        );
    }
}

export default TopicList;