import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/index';
const TabBarItem = TabBar.Item;
import Main from '../Home/index';


class Menu extends Component {
    componentDidMount = () => {
        console.log('requst');
    }
    state = {
        selectedTab: 'main'
    }
    onScrolls = (div, list) => {
        console.log(`${div.scrollTop}----${div.offsetHeight}----${list.offsetHeight}`);
        if (div.scrollTop + div.offsetHeight > list.offsetHeight) {
            console.log('该刷新了');
        }
    }
    switchTab = tab => {
        switch (tab) {
            case 'main':
                return (<Main onScrolls={this.onScrolls} />)
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <TabBar >
                    <TabBarItem
                        title='首页'
                        key='首页'
                        onPress={
                            () => {
                                this.setState({
                                    selectedTab: 'main'
                                });
                            }
                        }
                        selected={this.state.selectedTab === 'main'}
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    >
                        {this.switchTab('main')}
                    </TabBarItem>
                    <TabBarItem
                        title='发布'
                        key='发布'
                        onPress={
                            () => {
                                this.setState({
                                    selectedTab: 'Release'
                                });
                            }
                        }
                        selected={this.state.selectedTab === 'Release'}
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    >

                    </TabBarItem>
                    <TabBarItem
                        title='消息'
                        key='消息'
                        onPress={
                            () => {
                                this.setState({
                                    selectedTab: 'message'
                                });
                            }
                        }
                        selected={this.state.selectedTab === 'message'}
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    >

                    </TabBarItem>
                    <TabBarItem
                        title='我的'
                        key='我的'
                        onPress={
                            () => {
                                this.setState({
                                    selectedTab: 'my'
                                });
                            }
                        }
                        selected={this.state.selectedTab === 'my'}
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    >

                    </TabBarItem>
                </TabBar>
            </div>
        );
    }
}

Menu.propTypes = {

};

export default Menu;