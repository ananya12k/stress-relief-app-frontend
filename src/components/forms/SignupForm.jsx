import { useState } from "react";
import axios from "axios";
import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "", // Changed 'login' to 'username'
    email: "", // Added email field
    password: "",
    confirmPassword: "", // Added confirmPassword field
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // Check if passwords match
      // Show error message or handle appropriately
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register/",
        formData
      );
      if (response.status === 201) {
        // Successful registration
        console.log("Registration successful");
        onSubmit();
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
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
        name="username"
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
        id="form8Example7"
        name="email"
        label="Email"
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
      <MDBInput
        className="mb-3"
        type="password"
        id="form8Example6"
        name="confirmPassword"
        label="Confirm Password"
        onChange={onChangeHandler}
      />
      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-3"
        id="form8Example8"
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
