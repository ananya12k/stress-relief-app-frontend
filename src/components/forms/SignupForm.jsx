import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

const SignupForm = () => {
  return (
    <form className="p-3">
      {" "}
      {/* Added padding to the form */}
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
      <MDBInput className="mb-3" id="form8Example2" label="Username" />{" "}
      {/* Added margin-bottom */}
      <MDBInput
        className="mb-3"
        id="form8Example3"
        label="Email address"
      />{" "}
      {/* Added margin-bottom */}
      <MDBInput
        className="mb-3"
        type="password"
        id="form8Example4"
        label="Password"
      />{" "}
      {/* Added margin-bottom */}
      <MDBInput
        className="mb-3"
        type="password"
        id="form8Example5"
        label="Repeat password"
      />{" "}
      {/* Added margin-bottom */}
      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-3"
        id="form8Example6"
        label="I have read and agree to the terms"
        defaultChecked
      />
      <MDBBtn type="submit" className="mb-3" block>
        {" "}
        {/* Adjusted margin-bottom */}
        Sign in
      </MDBBtn>
    </form>
  );
};

export default SignupForm;
