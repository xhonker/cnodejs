import { TabBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/index';
const TabBarItem = TabBar.Item;
import Main from '../Home/index';
import { SyncAction } from '../../actions/index';

const bottomMenu = [
    {
        title: '首页',
        selectedTab: 'main',
        icon: 'index.svg',
        selectedIcon: 'index-fill.svg',
    }, {
        title: '发布',
        selectedTab: 'createTopic',
        icon: 'write.svg',
        selectedIcon: 'write-fill.svg',
    }, {
        title: '消息',
        selectedTab: 'message',
        icon: 'message.svg',
        selectedIcon: 'message-fill.svg',
    }, {
        title: '我的',
        selectedTab: 'my',
        icon: 'user.svg',
        selectedIcon: 'user-fill.svg',
    }
];

class Menu extends Component {
    state = {
        selectedTab: 'main',
    }
    onScrolls = (div, list) => {
        const { dispatch, item } = this.props; 
        if (div.scrollTop + div.offsetHeight > list.offsetHeight) {
            if (!item.get('isFetching')) {
                let num = item.get('limit') + 10;
                dispatch(SyncAction(item.get('tab'), num))
            }
        }
    }
    switchTab = tab => {
        const { dispatch, item } = this.props;
        switch (tab) {
            case 'main':
                return (<Main onScrolls={this.onScrolls} dispatch={dispatch} item={item} />)
                break;
            default:
                break;
        }
    }
    render() {  
        return (
            <div>
                <TabBar
                    barTintColor='white'
                >
                    {bottomMenu.map(data => {
                        const { icon, selectedIcon } = data;
                        return (
                            <TabBarItem
                                title={data.title}
                                key={data.title}
                                onPress={() => { this.setState({ selectedTab: data.selectedTab }) }}
                                selected={this.state.selectedTab === data.selectedTab}
                                icon={<Icon type={require(`../../static/image/${icon}`)} />}
                                selectedIcon={<Icon type={require(`../../static/image/${selectedIcon}`)} />}
                            >
                                {this.switchTab(data.selectedTab)}
                            </TabBarItem>

                        )
                    })}

                </TabBar>
            </div>
        );
    }
}

Menu.propTypes = {

};

export default Menu;