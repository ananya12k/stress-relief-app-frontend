import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";

const LoginComp = ({ show, handleClose }) => {
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");

  // Function to handle tab click
  const handleLoginRegisterClick = (tab) => {
    setLoginRegisterActive(tab);
  };
  return (
    <>
      <MDBModal open={show ? true : false}>
        <MDBModalDialog centered scrollable size="lg">
          <MDBModalContent
            className="p-5 overflow-auto"
            style={{ maxHeight: "80vh" }}
          >
            <MDBIcon
              fas
              icon="times"
              className="ms-auto click-handler"
              size="lg"
              onClick={handleClose}
            />

            <div>
              <MDBTabs pills justify className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleLoginRegisterClick("login")}
                    active={loginRegisterActive === "login"}
                  >
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleLoginRegisterClick("register")}
                    active={loginRegisterActive === "register"}
                  >
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane
                  open={loginRegisterActive === "login" ? true : false}
                >
                  <LoginForm />
                </MDBTabsPane>
                <MDBTabsPane
                  open={loginRegisterActive === "register" ? true : false}
                >
                  <SignupForm />
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default LoginComp;
