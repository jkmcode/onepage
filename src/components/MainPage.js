import React from "react";
import { Container } from "react-bootstrap";
import Introduction from "./Introduction";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import ProjectImplementation from "./ProjectImplementation";
import AboutUs from "./AboutUs";
import Technology from "./Technology";
import Offer from "./Offer";
//import Image from '../images/laptop.jpg'
import Home from "./Home";
import { useEffect } from "react";

function MainPage() {
  useEffect(() => {
    window.addEventListener("load", function () {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <main>
      <Home />
      <Introduction />
      <AboutUs />
      <ProjectImplementation />
      <Offer />
      <Technology />
      <Container>
        <Contact />
        <ContactForm />
      </Container>
    </main>
  );
}

export default MainPage;
