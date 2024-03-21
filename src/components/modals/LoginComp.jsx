import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";

const LoginComp = ({ show, handleClose }) => {
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");

  const handleLoginRegisterClick = (tab) => {
    setLoginRegisterActive(tab);
  };

  const sendParamsToBackend = (type, params) => {
    let endpoint = "";
    if (type === "login") {
      endpoint = "http://localhost:8080/login";
    } else if (type === "register") {
      endpoint = "http://localhost:8080/register";
    } else if (type === "logout") {
      endpoint = "http://localhost:8080/logout";
    }

    if (endpoint) {
      axios
        .post(endpoint, params)
        .then((response) => {
          if (type === "logout") {
            console.log("Logout successful");
            // Handle logout success if needed
          } else {
            console.log(`${type} parameters sent to backend successfully`);
            // Handle success for login or register if needed
          }
        })
        .catch((error) => {
          if (type === "logout") {
            console.error("Error during logout:", error);
            // Handle logout error if needed
          } else {
            console.error(
              `Error sending ${type} parameters to backend:`,
              error
            );
            // Handle error for login or register if needed
          }
        });
    } else {
      console.error(`Invalid request type: ${type}`);
      // Handle invalid request type if needed
    }
  };

  return (
    <MDBModal open={show}>
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
              <MDBTabsPane open={loginRegisterActive === "login"}>
                <LoginForm
                  onLogin={(login, password) =>
                    sendParamsToBackend("login", { login, password })
                  }
                />
              </MDBTabsPane>
              <MDBTabsPane open={loginRegisterActive === "register"}>
                <SignupForm
                  onSubmit={(firstName, lastName, login, password) =>
                    sendParamsToBackend("register", {
                      firstName,
                      lastName,
                      login,
                      password,
                    })
                  }
                />
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default LoginComp;
