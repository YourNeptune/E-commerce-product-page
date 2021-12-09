import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Details from "./Details";
import NavBar from "./NavBar";

const MainContent = (props) => {
  return (
    <>
      <Container className="mainContentContainer">
        <Row>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Details func={props.func}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainContent;
