import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavBar, Table, Tabs, List } from 'antd-mobile';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
const TabPane = Tabs.TabPane;
const ListItem = List.Item;
const ItemBrief = ListItem.Brief;
const tabs = [
    {
        tab: 'all',
        key: '1',
        name: '全部'
    }, {
        tab: 'good',
        key: '2',
        name: '精华'
    }, {
        tab: 'share',
        key: '3',
        name: '分享'
    }, {
        tab: 'ask',
        key: '4',
        name: '问答'
    }, {
        tab: 'job',
        key: '5',
        name: '招聘'
    }
]

class Main extends Component {
    selectTab = tab => {
        switch (tab) {
            case 'all':
                return (
                    <div>
                        <ListItem>

                        </ListItem>

                    </div>
                )
            case 'good':
                return (
                    <div>
                    </div>
                )
            default:
                break;
        }
    }
    render() {
        const { onScrolls } = this.props;
        return (
            <div>
                <NavBar iconName='ellipsis'>首页</NavBar>
                <Tabs defaultActiveKey='1' swipeable={false}>
                    {
                        tabs.map((index) => {
                            return (
                                <TabPane key={index.key} tab={index.name}>
                                    <div
                                        style={{ height: document.documentElement.clientHeight - 276, overflow: 'auto' }}
                                        onScroll={
                                            () => onScrolls(ReactDOM.findDOMNode(this.refs.listDiv), ReactDOM.findDOMNode(this.refs.listItem))
                                        }
                                        ref="listDiv"
                                    >
                                        <List ref='listItem'>
                                            {this.selectTab(index.tab)}
                                        </List>
                                    </div>
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;