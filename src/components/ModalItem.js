import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image_product_1_thumbnail from "../images/image-product-1-thumbnail.jpg";
import icon_delete from "../images/icon-delete.svg";

const ModalItem = () => {
  const number = 1;
  const totalAmount = "125.00";
  return (
    <Container className="ModalItem">
      <Row className="ModalItem__Row">
        <Col sm={2} className="ModalItem__Col">
          <Image
            src={image_product_1_thumbnail}
            className="ModalItem__image"
            id="image_product_1_thumbnail"
            onClick={(e) => {
              //   handleImageClick(e);
            }}
          />
        </Col>
        <Col  className="ModalItem__Col">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {number} <strong>{`$${totalAmount}`}</strong>
          </p>
        </Col>
        <Col sm={1} className="ModalItem__Col">
          <img src={icon_delete} />
        </Col>
      </Row>
    </Container>
  );
};

export default ModalItem;