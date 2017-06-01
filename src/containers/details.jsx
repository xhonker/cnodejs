import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
import cDetails from '../components/Topic/Details/index';
import { request_details } from '../actions/index';

class Details extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(request_details(params.id))
    }
    onLeftClick = () => {
        history.go(-1)
    }
    render() {
        console.log(this.props.data);
        return (
            <div>
                <NavBar onLeftClick={this.onLeftClick}>
                    详情
                </NavBar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.details.data
    }
}
export default connect(mapStateToProps)(Details);