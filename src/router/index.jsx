import React, { Component } from 'react';
import { Route, Router, browserHistory, hashHistory, IndexRoute, Redirect, Link } from 'react-router';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
import Test from '../testComponent/index';

import main from '../components/TabBar/index';
class Roots extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
 
const RouterConfig = (
    <Router history={history}>
        <Route path='/' component={Roots}>
            <IndexRoute component={main} /> 
            <Redirect from='*' to='/' /> // 未知路径重定向到首页
        </Route>
    </Router>
)


export default RouterConfig;