import React, { Component } from "react";
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../actions/signUpAction';


class RegisterPage extends Component {
    render() {
        const { userSignupRequest } = this.props;
        console.log('userSignupRequest');
        console.log(userSignupRequest);
        return (
            <SignUpForm userSignupRequest={userSignupRequest}/>
        );
    }
}

RegisterPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}


export default connect(null, { userSignupRequest })(RegisterPage);

