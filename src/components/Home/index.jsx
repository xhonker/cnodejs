import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavBar, Table, Tabs, ActivityIndicator } from 'antd-mobile';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
const TabPane = Tabs.TabPane;
import './index.less';
import TopicList from '../Topic/List/index';
import { SyncAction } from '../../actions/index';
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
    componentDidMount() { 
        const { dispatch } = this.props;
        dispatch(SyncAction('all'))
    }
    onTabClick = (tab) => {
        const { dispatch } = this.props;
        switch (tab) {
            case '1':
                dispatch(SyncAction('all'))
                break;
            case '2':
                dispatch(SyncAction('good'))
                break;
            case '3':
                dispatch(SyncAction('share'))
                break;
            case '4':
                dispatch(SyncAction('ask'))
                break;
            case '5':
                dispatch(SyncAction('job'))
                break;
            default:
                break;
        }
    }
    render() {
        const { onScrolls, item } = this.props;
        return (
            <div style={{ height: document.documentElement.clientHeight - 99 }}>
                <NavBar iconName='ellipsis'>首页</NavBar>
                <Tabs defaultActiveKey='1' animated={false} onTabClick={this.onTabClick}>
                    {
                        tabs.map((index) => {
                            return (
                                <TabPane key={index.key} tab={index.name}>
                                    {(item.length != 0) ? <TopicList onScroll={onScrolls} state={item} onScrolls={onScrolls} /> : <ActivityIndicator toast text='加载中...' size="large" />}
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