import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Details from "./Details";
import NavBar from "./NavBar";

const MainContent = ({func}) => {
  return (
    <div className="mainContentContainer">
      <Container >
        <Row>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Details func={func}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
