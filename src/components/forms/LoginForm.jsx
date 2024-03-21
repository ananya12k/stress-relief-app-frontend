import { useState } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const LoginForm = ({ onLogin, onRegister }) => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(formData.login, formData.password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister(
      formData.firstName,
      formData.lastName,
      formData.login,
      formData.password
    );
  };

  return (
    <form className="p-3">
      <div className="text-center mb-2">
        <p> Login with:</p>

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
      <MDBBtn type="submit" className="mb-3" block onClick={handleLogin}>
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
