import { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn, // Import the MDBBtn component
} from "mdb-react-ui-kit";
import LoginComp from "./modals/LoginComp";

export default function Navbar() {
  useEffect(() => {
    // Check if JWT token is present in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openNavRight, setOpenNavRight] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to navigate to the login page

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light" className="fixed-top">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img
              src="https://www.ahna.org/portals/66/Stress%20Management%20Logo.png"
              height="50"
              width={50}
              alt=""
              loading="lazy"
            />
            {/* <strong>Stress Relief App</strong> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavRight(!openNavRight)}
          >
            <i className="fas fa-bars"></i>
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/"
                  active={activeTab === "home"}
                  onClick={() => handleTabClick("home")}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/exercises"
                  active={activeTab === "exercises"}
                  onClick={() => handleTabClick("exercises")}
                >
                  Exercises
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/insights"
                  active={activeTab === "insights"}
                  onClick={() => handleTabClick("insights")}
                >
                  Insights
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* Replace the dropdown with a simple button */}
              <MDBNavbarItem>
                {isLoggedIn ? (
                  <MDBBtn
                    rounded
                    className="mx-2"
                    color="info"
                    onClick={handleLogout}
                  >
                    Logout
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    rounded
                    className="mx-2"
                    color="info"
                    onClick={handleOpen}
                  >
                    Login
                  </MDBBtn>
                )}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <LoginComp show={showModal} handleClose={handleClose} />
    </>
  );
}
