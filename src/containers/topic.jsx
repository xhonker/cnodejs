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

const main = connect(mapStateToPorps)(Home);

export default main;