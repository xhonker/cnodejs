import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../components/TabBar/index';
import { bindActionCreators } from "redux";
import { SyncAction } from "../actions/index";
const mapStateToPorps = state => {
    return {
        item: state.get('main')
    }
};
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                SyncAction
            },
            dispatch)
    };
}
const main = connect(mapStateToPorps)(Main);

export default main;