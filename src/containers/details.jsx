import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
import Test from '../components/Topic/Details/index';
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
        const { data } = this.props;
        return (
            <div>
                <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 99999 }}>
                    <NavBar onLeftClick={this.onLeftClick}>
                        详情
                </NavBar>
                </div> 
                <Test item={data} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.details.data
    }
}
export default connect(mapStateToProps)(Details);