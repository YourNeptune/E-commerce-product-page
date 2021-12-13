import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import icon_minus from "../images/icon-minus.svg";
import icon_plus from "../images/icon-plus.svg";
import cartSVG from "../images/icon-cart2.svg";
import CartModal from "./CartModal";

const Details = (props) => {
  const [number, setNumber] = useState(0);

  const addToCart = () => {
    props.func(number);
  };

  const handleMinus = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const handlePlus = () => {
    setNumber(number + 1);
  };

  return (
    <Container>
      <div className="detailsContainer">
        <Row className="text">
          <p className="text__label">Sneaker Company</p>
          <h2 className="text__title">Fall Limited Edition Sneakers</h2>
          <p className="text__body">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <p className="price__number">$125.00</p>
            <p className="price__label">50%</p>
          </div>
          <p className="price__before">$250.00</p>
        </Row>

        <Row className="buttons">
          {/* Counter */}
          <Col sm={3} className="counterContainer">
            <img src={icon_minus} onClick={handleMinus} />
            <p>{number}</p>
            <img src={icon_plus} onClick={handlePlus} />
          </Col>
          {/* Add to cart button */}
          <Col className="addToCart__Col">
            <Button size="lg" className="AddToCartButton" onClick={addToCart}>
              <img src={cartSVG} />
              Add to cart
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Details;
