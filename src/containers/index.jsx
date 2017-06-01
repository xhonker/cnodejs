import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import Main from '../components/TabBar/index';

const mapStateToPorps = state => {  
    console.log(state);
    return {
        item: state.main
    }
}; 

const main = connect(mapStateToPorps)(Main);

export default main;