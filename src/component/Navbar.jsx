import { Container, Navbar, Nav } from "react-bootstrap";

import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navImag1 from "../assets/img/nav-icon1.svg";
import navImag2 from "../assets/img/nav-icon2.svg";
import navImag3 from "../assets/img/nav-icon3.svg";

import "../App.css";

function Navbars() {
  const [activeLink, setActivelink] = useState("Home");
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActivelink(value);
  };

  return (
    <Navbar expand="lg" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("porjects")}
            >
              projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="home">
                <img src={navImag1} alt=" " />
              </a>
              <a href="home">
                <img src={navImag2} alt=" " />
              </a>
              <a href="home">
                <img src={navImag3} alt=" " />
              </a>
            </div>
            <button className="wwd" onClick={() => console.log("connected")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
