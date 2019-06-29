import React, { Component } from "react";
import PropTypes from 'prop-types';

import validateInput from '../../validations/signup';
import InputFieldGroup from '../common/InputFiledGroup'


class SignUpForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            console.log('this.state');
            console.log(this.state);
            this.props.userSignupRequest(this.state).then(
                (data) => {
                    console.log("SUCCES");
                    console.log(data);
                    this.setState({ errors: {}, isLoading: false });
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                    });
                    console.log('this.props');
                    console.log(this.props);
                    this.props.history.push('/')
                },
                ( data ) => {
                    console.log("ERROR");
                    let errors = data.response.data;
                    console.log(errors);
                    this.setState({ errors: errors, isLoading: false })
                },
            );
        }
    }

    render (){
        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h2 className="">Registration form:</h2>
                <InputFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    type="email"
                />

                <InputFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />

                <InputFieldGroup
                    error={errors.passwordConfirm}
                    label="Confirm password"
                    onChange={this.onChange}
                    value={this.state.passwordConfirm}
                    field="passwordConfirm"
                    type="password"
                />

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>

            </form>
        );
    }

}

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default SignUpForm;