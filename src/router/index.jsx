import React, { Component } from 'react';
import { Route, Router, browserHistory, hashHistory, IndexRoute, Redirect, Link } from 'react-router';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

class Roots extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>index</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/user'>user</Link></li>
                    <li><Link to='/home'>home</Link></li>
                </ul>
            </div>
        )
    }
}

const RouterConfig = (
    <Router history={history}>
        <Route path='/' component={Roots}>
            <IndexRoute component={Index} />
            <Route path='home' component={home} />
            <Redirect from='*' to='/' /> // 未知路径重定向到首页
        </Route>
    </Router>
)


export default RouterConfig;