import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';

const ListItem = List.Item;
const Brief = ListItem.Brief;
class TopicList extends Component {
    render() {
        const { onScroll } = this.props;
        return (
            <div
                ref='container'
                style={{ height: document.documentElement.clientHeight - 276, overflow: 'auto' }}
                onScroll={() => onScroll(ReactDOM.findDOMNode(this.refs.container), ReactDOM.findDOMNode(this.refs.list))}
            >
                <List ref='list' className='list'>
                    {
                        topic.map(index => {
                            return (
                                <Link>
                                    <ListItem align='bottom' thumb={index.author.avatar_url} multipleLine>
                                        {index.title}
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </List>

            </div>
        );
    }
}

export default TopicList;