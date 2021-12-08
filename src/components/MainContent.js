import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Details from "./Details";

const MainContent = () => {
  return (
    <Container className="mainContentContainer">
      <Row>
        <Col><Cards/></Col>
        <Col><Details/></Col>
      </Row>       
    </Container>
  );
};

export default MainContent;
