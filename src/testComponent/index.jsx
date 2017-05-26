import React, { Component } from 'react';
import { Drawer, NavBar } from 'antd-mobile';
import PropTypes from 'prop-types';

class DrawerTest extends Component {
    render() {
        return (
            <div>
                <NavBar iconName="ellipsis">Basic</NavBar>
            </div>
        );
    }
}

DrawerTest.propTypes = {

};

export default DrawerTest;