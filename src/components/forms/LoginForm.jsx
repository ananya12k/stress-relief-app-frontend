import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const LoginForm = () => {
  return (
    <form className="p-3">
      {" "}
      {/* Added padding to the form */}
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
      />{" "}
      <MDBInput
        className="mb-3"
        type="password"
        hidden={true}
        id="form7Example2"
        label="Password"
      />{" "}
      <MDBRow className="mb-3">
        {" "}
        {/* Adjusted margin-bottom */}
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox
            id="form7Example3"
            label="Remember me"
            defaultChecked
          />
        </MDBCol>
        <MDBCol>
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <MDBBtn type="submit" className="mb-3" block>
        {" "}
        {/* Adjusted margin-bottom */}
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
