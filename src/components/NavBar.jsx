import { useState } from "react";
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
import { useNavigate } from "react-router-dom"; // Import useHistory to handle navigation

export default function Navbar() {
  const [openNavRight, setOpenNavRight] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const history = useNavigate(); // Initialize useHistory

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to navigate to the login page
  const goToLogin = () => {
    history("/login"); // Redirect to the login page
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="fixed-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
            height="30"
            alt=""
            loading="lazy"
          />
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
                active={activeTab === "home"}
                onClick={() => handleTabClick("home")}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={activeTab === "exercises"}
                onClick={() => handleTabClick("exercises")}
              >
                Exercises
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={activeTab === "insights"}
                onClick={() => handleTabClick("insights")}
              >
                Insights
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={activeTab === "extras"}
                onClick={() => handleTabClick("extras")}
              >
                Extras
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* Replace the dropdown with a simple button */}
              <MDBBtn rounded className="mx-2" color="info" onClick={goToLogin}>
                Login
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
