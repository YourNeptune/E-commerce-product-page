import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image_product_1_thumbnail from "../images/image-product-1-thumbnail.jpg";
import icon_delete from "../images/icon-delete.svg";

const ModalItem = ({ number, getProductNumber }) => {
  const totalAmount = (number) => {
    const price = 125.0 * number;
    return `$${price}`;
  };

  const handleDelete = () => {
    getProductNumber(0);
  };

  return (
    <Container className="ModalItem">
      <Row className=""> 
        <Col md={2} className="ModalItem__Col">
          <Image
            src={image_product_1_thumbnail}
            className="ModalItem__image"
            id="image_product_1_thumbnail"
          />
        </Col>
        <Col className="ModalItem__Col">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {number} <strong>{totalAmount(number)}</strong>
          </p>
        </Col>
        <Col md={1} className="ModalItem__Col icon--delete">
          <img src={icon_delete} onClick={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default ModalItem;
