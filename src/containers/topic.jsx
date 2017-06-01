import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { test, SyncAction } from '../actions/index';
import Home from '../components/Home/index';

const mapStateToPorps = state => {
    return {
        item: state.main
    }
};
const mapDispatchToPorps = dispath => {
    return {
        dispath: e => { dispath(e) }
    }
}

const main = connect(mapStateToPorps, mapDispatchToPorps)(Home);

export default main;