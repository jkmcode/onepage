import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cookie from "./Cookie";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center mt-3">Copyright &copy; JKMCODE</Col>
        </Row>
      </Container>
      <Cookie />
    </footer>
  );
}

export default Footer;
