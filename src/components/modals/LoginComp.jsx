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
import { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
// import { useNavigate } from "react-router-dom";
import SignupForm from "../forms/SignupForm";
const LoginComp = ({ show, handleClose }) => {
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");

  const handleLoginRegisterClick = (tab) => {
    setLoginRegisterActive(tab);
    const newUrl = tab === "login" ? "/login" : "/register";
    window.history.pushState({}, "", newUrl); // Update URL manually
  };

  // Handle URL changes (including back button) and modal closure
  useEffect(() => {
    const onPopState = () => {
      // Check if URL potentially changed while modal was open
      if (show && window.history.state !== undefined) {
        const originalUrl = window.location.href.split("#")[0]; // Remove hash
        if (originalUrl !== window.history.state) {
          // URL has changed (likely back button), so reset state
          setLoginRegisterActive("login");
          window.history.replaceState({}, "", originalUrl); // Replace URL
        }
      }
    };

    // Add and remove event listener on component mount/unmount
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [show]); // Re-run useEffect on show prop change

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
              style={{ marginBottom: "1rem" }}
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
