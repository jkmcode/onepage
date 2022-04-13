import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import projects from "../data";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.addEventListener("load", function () {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <Container className="projects-position">
      <Row xs={1} md={2}>
        {projects.map((project) => {
          const { id, title, image, description, path } = project;
          return (
            <Col>
              <LinkContainer to={path}>
                <Card
                  className="my-3 p-3 rounded content-position project-active"
                  key={id}
                >
                  <Card.Text className="font-stylig">{title}</Card.Text>
                  <Card.Img className="img-size" src={image} />
                  <Card.Text className="font-stylig">{description}</Card.Text>
                </Card>
              </LinkContainer>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
