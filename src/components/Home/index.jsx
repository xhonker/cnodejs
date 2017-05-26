import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavBar, Table, Tabs, List } from 'antd-mobile';
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
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>

                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>

                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                        <ListItem >
                            sdfsf
                    </ListItem>
                    </div>


                )
            case 'good':
                return (

                    <ListItem >
                        this is good
                    </ListItem>
                )

            default:
                break;
        }
    }

    render() {
        console.log(this.props.onScroll);
        return (
            <div>
                <NavBar iconName='ellipsis'>首页</NavBar>
                <Tabs defaultActiveKey='1' swipeable={false}>
                    {
                        tabs.map((index) => {
                            return (
                                <TabPane key={index.key} tab={index.name}>
                                    <div
                                        ref='domList'
                                        onScroll={()=>this.props.onScroll(ReactDOM.findDOMNode(this.refs.domList))}
                                        style={{ height: '10000px' }}
                                    > 

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