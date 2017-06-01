import React, { Component } from 'react';
import { Route, Router, browserHistory, hashHistory, IndexRoute, Redirect, Link } from 'react-router';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
import Test from '../testComponent/index';

// import main from '../components/TabBar/index';
import main from '../containers/index';
// import main from '../containers/topic';

import details from '../containers/details';
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
    <Router history={hashHistory}>
        <Route path='/' component={Roots}>
            <IndexRoute component={main} />
            <Route path='/details/:id' component={details} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
)


export default RouterConfig;