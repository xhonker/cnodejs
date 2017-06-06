import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
class Test extends Component {
    render() {
        console.log(this.props);
        const { item } = this.props;
        return (
            <div>
                <div className='details_body' dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
        );
    }
}

Test.propTypes = {

};

export default Test;