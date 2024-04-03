import { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/mylogin/",
        formData
      );
      const token = response.data.token; // Assuming the token is returned in the response
      onLogin(token);
    } catch (error) {
      setError("Invalid credentials. Please try again."); // Handle login error
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="text-center mb-2">
        <p>Login with:</p>
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
        type="email"
        id="form7Example1"
        label="Email address"
        onChange={onChangeHandler}
        name="login"
      />
      <MDBInput
        className="mb-3"
        type="password"
        id="form7Example2"
        label="Password"
        onChange={onChangeHandler}
        name="password"
      />
      <MDBRow className="mb-3 d-flex align-items-center">
        <MDBCol
          xs={6}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            justifyItems: "start end",
            marginTop: "1rem",
          }}
        >
          <MDBCheckbox id="form7Example3" label="Remember me" defaultChecked />
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>
      {error && <div className="text-danger mb-3">{error}</div>}
      <MDBBtn type="submit" className="mb-3" block>
        Sign in
      </MDBBtn>
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
