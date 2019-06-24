import React, { Component } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../validations/signup';



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
                    this.setState({ errors: {}, isLoading: false })
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
                <div className={classnames("form-group", { 'has-danger': errors.email })}>
                    <label className="control-label">Email:</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>

                <div className={classnames("form-group", { 'has-danger': errors.password })}>
                    <label className="control-label">Password:</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    {errors.password && <span className="help-block ">{errors.password}</span>}
                </div>

                <div className={classnames("form-group", { 'has-danger': errors.passwordConfirm })}>
                    <label className="control-label">Confirm Password:</label>
                    <input
                        value={this.state.passwordConfirm}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                    />
                    {errors.passwordConfirm && <span className="help-block ">{errors.passwordConfirm}</span>}
                </div>

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
    userSignupRequest: PropTypes.func.isRequired
}

export default SignUpForm;