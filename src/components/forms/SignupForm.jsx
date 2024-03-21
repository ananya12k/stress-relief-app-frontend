import React, { useState } from "react";
import axios from "axios";
import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
      formData.firstName,
      formData.lastName,
      formData.login,
      formData.password
    );
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="text-center mb-2">
        <p>Sign up with:</p>

        <MDBBtn floating color="secondary" className="mx-1">
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn floating color="secondary" className="mx-1">
          <MDBIcon fab icon="google" />
        </MDBBtn>

        <MDBBtn floating color="secondary" className="mx-1">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>
      </div>
      <p className="text-center">or:</p>
      <MDBInput
        className="mb-3"
        id="form8Example4"
        name="login"
        label="Username"
        onChange={onChangeHandler}
      />
      <MDBInput
        className="mb-3"
        id="form8Example2"
        name="firstName"
        label="First Name"
        onChange={onChangeHandler}
      />
      <MDBInput
        className="mb-3"
        id="form8Example3"
        name="lastName"
        label="Last Name"
        onChange={onChangeHandler}
      />

      <MDBInput
        className="mb-3"
        type="password"
        id="form8Example5"
        name="password"
        label="Password"
        onChange={onChangeHandler}
      />
      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-3"
        id="form8Example6"
        label="I have read and agree to the terms"
        defaultChecked
      />

      <MDBBtn type="submit" className="mb-3" block>
        Sign up
      </MDBBtn>
    </form>
  );
};

export default SignupForm;
