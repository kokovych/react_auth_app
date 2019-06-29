import React, { Component } from "react";
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actions/signUpAction';
import { addFlashMessage } from '../../actions/flashMessages.js';

class RegisterPage extends Component {
    render() {
        const { userSignupRequest, addFlashMessage } = this.props;
        console.log('userSignupRequest');
        console.log(userSignupRequest);
        console.log('addFlashMessage');
        console.log(addFlashMessage);
        return (
            <div className="row">
                <SignUpForm userSignupRequest={userSignupRequest} history={this.props.history} addFlashMessage={addFlashMessage}/>
            </div>
        );
    }
}

RegisterPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
};


export default connect(null, { userSignupRequest, addFlashMessage })(RegisterPage);

