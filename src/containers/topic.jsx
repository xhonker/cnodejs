import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import { test, SyncAction } from '../actions/index';
import Home from '../components/Home/index';

const mapStateToPorps = state => {
    return {
        item: state.get('main')
    }
};
const mapDispachToPorps = dispatch => {
    return {
        actions: bindActionCreators({
            SyncAction
        }, dispatch)
    }
}
const main = connect(mapStateToPorps, mapDispachToPorps)(Home);

export default main;