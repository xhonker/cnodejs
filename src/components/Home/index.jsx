import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavBar, Table, Tabs, ActivityIndicator } from "antd-mobile";
import { Link } from "react-router";
import PropTypes from "prop-types";
const TabPane = Tabs.TabPane;
import "./index.less";
import TopicList from "../Topic/List/index";
import { SyncAction } from "../../actions/index";
const tabs = [
  {
    tab: "all",
    key: "1",
    name: "全部"
  },
  {
    tab: "good",
    key: "2",
    name: "精华"
  },
  {
    tab: "share",
    key: "3",
    name: "分享"
  },
  {
    tab: "ask",
    key: "4",
    name: "问答"
  },
  {
    tab: "job",
    key: "5",
    name: "招聘"
  }
];

class Main extends Component {
  componentDidMount() {
    const { dispatch, item } = this.props;
    dispatch(SyncAction(item.get('tab')));
    // this.props.actions.SyncAction(itm.get('tab'));
    // console.log(this.props.actions); 
  } 
  onTabClick = tab => {
    const { dispatch, item } = this.props;
    switch (tab) {
      case "1":
        if (!item.get('isFetching')) dispatch(SyncAction("all"));
        break;
      case "2":
        if (!item.get('isFetching')) dispatch(SyncAction("good"));
        break;
      case "3":
        if (!item.get('isFetching')) dispatch(SyncAction("share"));
        break;
      case "4":
        if (!item.get('isFetching')) dispatch(SyncAction("ask"));
        break;
      case "5":
        if (!item.get('isFetching')) dispatch(SyncAction("job"));
        break;
      default:
        break;
    }
  };
  render() {
    const { onScrolls, item, dispatch } = this.props;
    let defaultActiveKey = '1';
    if (item.get('tab') == "all") {
      defaultActiveKey = "1";
    } else if (item.get('tab') == "good") {
      defaultActiveKey = "2";
    } else if (item.get('tab') == "share") {
      defaultActiveKey = "3";
    } else if (item.get('tab') == "ask") {
      defaultActiveKey = "4";
    } else if (item.get('tab') == "job") {
      defaultActiveKey = "5";
    }
    return (
      <div>
        <NavBar iconName="ellipsis">首页</NavBar>
        <Tabs
          defaultActiveKey={defaultActiveKey}
          animated={false}
          onTabClick={this.onTabClick}
        >
          {tabs.map(index => {
            return (
              <TabPane key={index.key} tab={index.name}>
                {
                  item.get('tab') == index.tab && item.get('item').length > 1
                    ? <TopicList
                      dispatch={dispatch}
                      onScroll={onScrolls}
                      state={item.get('item')}
                      onScrolls={onScrolls}
                      data={this.props}
                    />
                    : <ActivityIndicator toast text="加载中..." size="large" />
                }
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

Main.propTypes = {
  item: PropTypes.object.isRequired,
  onScrolls: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Main;
