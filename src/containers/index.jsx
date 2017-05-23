import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { test,SyncAction } from '../actions/index';
import Home from '../components/Home/index';

const mapStateToPorps = state => {
    return {
        hidden: state.main.hidden
    }
};

const mapDispatchToPorps = dispath => {
    return {
        testClick: () => { dispath(SyncAction('good')) }
    }
}

const main = connect(mapStateToPorps, mapDispatchToPorps)(Home);

export default main;