import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators";
import { renderField, renderError } from "./utils/renderUtils";
import { registerUser } from "../../actions/auth";

class Register extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <div className="row justify-content-center">
        <form className="col col-sm-4 card mt-5 p-2" onSubmit={handleSubmit}>
          <h4 className="text-md-center">Register</h4>
          <hr />

          <fieldset className="form-group">
            <Field
              name="username"
              label="Username"
              component={renderField}
              type="text"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="email"
              label="Email"
              component={renderField}
              type="text"
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password1"
              label="Password"
              component={renderField}
              type="password"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password2"
              label="Confirm Password"
              component={renderField}
              type="password"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          {renderError(error)}

          <fieldset className="form-group">
            <button action="submit" className="btn btn-primary">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const validateForm = values => {
  const errors = {};
  const { password1, password2 } = values;
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!strongRegex.test(password1)) {
    errors.password1 =
      "Passwords must contain at least 1 lowercase letter, uppercase letter, number and special character. Passwords must also be at least 8 characters long";
  }
  if (password1 !== password2) {
    errors.password2 = "Password does not match.";
  }
  return errors;
};

export default reduxForm({
  form: "register",
  validate: validateForm,
  onSubmit: registerUser
})(Register);
