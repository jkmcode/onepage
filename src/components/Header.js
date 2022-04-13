import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import img1 from "../images/2.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import { useGlobalContext } from "../context";

function Header() {
  const { openContact, openAboutUs, openHome } = useGlobalContext();

  const [navbar, setNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const scrollContact = () => {
    scroller.scrollTo("contact", { smooth: true, offset: -90, duration: 10 });
    openContact();
    setExpanded(false);
  };

  const scrolloffers = () => {
    scroller.scrollTo("offers", { smooth: true, offset: -90, duration: 10 });
    openContact();
    setExpanded(false);
  };

  const scrollAboutUs = () => {
    scroller.scrollTo("aboutUs", { smooth: true, offset: -90, duration: 10 });
    openAboutUs();
    setExpanded(false);
  };

  const scrollHome = () => {
    scroller.scrollTo("home", { smooth: true, offset: -90, duration: 10 });
    openHome();
    setExpanded(false);
  };

  const navExpended = () => {
    setExpanded(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        className={navbar ? "navbaractive color-nav" : "navbar color-nav"}
        expanded={expanded}
      >
        <Container>
          <div>
            <img src={img1} className="logo-img" />
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto center">
              <LinkContainer to="/">
                <Nav.Link onClick={scrollHome} className="margin">
                  {t("Navbar_Home")}
                </Nav.Link>
              </LinkContainer>

              {/* <NavDropdown title={t('Navbar_Programming')} id="basic-nav-dropdown" className='margin'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}

              {/* <LinkContainer to="/projects"> 
                    <Nav.Link 
                        className='margin'
                        onClick={navExpended}
                    >
                        {t('Navbar_Projects')}
                    </Nav.Link>
                </LinkContainer>  */}

              <LinkContainer to="/">
                <Nav.Link onClick={scrollAboutUs} className="margin">
                  {t("Navbar_About_As")}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link onClick={scrollContact} className="margin">
                  {t("Navbar_Contact")}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link onClick={scrolloffers} className="margin">
                  {t("Navbar_Offer")}
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <LanguageSwitcher />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
