import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { List, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';

const ListItem = List.Item;
const Brief = ListItem.Brief;
import './style/index.less';
class TopicList extends Component {
    render() {
        const { onScrolls, state } = this.props; 
        return (
            <div
                onScroll={
                    () => onScrolls(ReactDOM.findDOMNode(this.refs.listDiv), ReactDOM.findDOMNode(this.refs.listItem))
                }
                ref="listDiv"
            >
                <List ref='listItem'>
                    {
                        state.map(index => {
                            return (
                                <Link key={index.id} to={`/details/${index.id}`} style={{ display: 'block' }}>
                                    <ListItem align='bottom' thumb={index.author.avatar_url} multipleLine>
                                        {index.title}  <Brief>{index.reply_count}/{index.visit_count} <span style={{ float: 'right' }}>{index.create_at.substring(0, 10)}</span></Brief>
                                    </ListItem>
                                </Link>
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