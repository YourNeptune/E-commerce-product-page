import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image_product_1 from "../images/image-product-1.jpg";
import image_product_2 from "../images/image-product-2.jpg";
import image_product_3 from "../images/image-product-3.jpg";
import image_product_4 from "../images/image-product-4.jpg";
import image_product_1_thumbnail from "../images/image-product-1-thumbnail.jpg";
import image_product_2_thumbnail from "../images/image-product-2-thumbnail.jpg";
import image_product_3_thumbnail from "../images/image-product-3-thumbnail.jpg";
import image_product_4_thumbnail from "../images/image-product-4-thumbnail.jpg";

const Cards = () => {
  const [selectedImage, setSelectedImage] = useState(
    "image_product_1_thumbnail"
  );
  const [select_img1, setSelect_img1] = useState(true);
  const [select_img2, setSelect_img2] = useState(false);
  const [select_img3, setSelect_img3] = useState(false);
  const [select_img4, setSelect_img4] = useState(false);

//   useEffect(() => {
//     console.log("Changed!", selectedImage);
//   }, [selectedImage]);

  const handleImageClick = (e) => {
    const image = e.target.attributes.id.value;
    setSelectedImage(image);
    switch (image) {
      case "image_product_1_thumbnail":
        setSelect_img1(true);
        setSelect_img2(false);
        setSelect_img3(false);
        setSelect_img4(false);
        break;
      case "image_product_2_thumbnail":
        setSelect_img1(false);
        setSelect_img2(true);
        setSelect_img3(false);
        setSelect_img4(false);
        break;
      case "image_product_3_thumbnail":
        setSelect_img1(false);
        setSelect_img2(false);
        setSelect_img3(true);
        setSelect_img4(false);
        break;
      case "image_product_4_thumbnail":
        setSelect_img1(false);
        setSelect_img2(false);
        setSelect_img3(false);
        setSelect_img4(true);
        break;

      default:
        break;
    }
  };

  const handleImageDisplay = (selectedImage) => {
    switch (selectedImage) {
      case "image_product_1_thumbnail":
        return image_product_1;
      case "image_product_2_thumbnail":
        return image_product_2;
      case "image_product_3_thumbnail":
        return image_product_3;
      case "image_product_4_thumbnail":
        return image_product_4;

      default:
        break;
    }
  };

  return (
    <Container className="cardsContainer">
      <Row className="myRow">
        <Col>
          <Image
            src={handleImageDisplay(selectedImage)}
            className="Image_big"
          />
        </Col>
      </Row>
      <Row className="Cards_sm_Row " sm={4}>
        <Col className="myCol">
          {select_img1 ? (
            <div className="Image--border">
              <Image
                src={image_product_1_thumbnail}
                className="Image_sm Image--active"
                id="image_product_1_thumbnail"
                onClick={(e) => {
                  handleImageClick(e);
                }}
              />
            </div>
          ) : (
            <Image
              src={image_product_1_thumbnail}
              className="Image_sm Image_sm--hover"
              id="image_product_1_thumbnail"
              onClick={(e) => {
                handleImageClick(e);
              }}
            />
          )}
        </Col>
        <Col>
          {select_img2 ? (
            <div className="Image--border">
              <Image
                src={image_product_2_thumbnail}
                className="Image_sm Image--active"
                id="image_product_2_thumbnail"
                onClick={(e) => {
                  handleImageClick(e);
                }}
              />
            </div>
          ) : (
            <Image
              src={image_product_2_thumbnail}
              className="Image_sm Image_sm--hover"
              id="image_product_2_thumbnail"
              onClick={(e) => {
                handleImageClick(e);
              }}
            />
          )}
        </Col>
        <Col>
          {select_img3 ? (
            <div className="Image--border">
              <Image
                src={image_product_3_thumbnail}
                className="Image_sm Image--active"
                id="image_product_3_thumbnail"
                onClick={(e) => {
                  handleImageClick(e);
                }}
              />
            </div>
          ) : (
            <Image
              src={image_product_3_thumbnail}
              className="Image_sm Image_sm--hover"
              id="image_product_3_thumbnail"
              onClick={(e) => {
                handleImageClick(e);
              }}
            />
          )}
        </Col>
        <Col>
          {select_img4 ? (
            <div className="Image--border">
              <Image
                src={image_product_4_thumbnail}
                className="Image_sm Image--active"
                id="image_product_4_thumbnail"
                onClick={(e) => {
                  handleImageClick(e);
                }}
              />
            </div>
          ) : (
            <Image
              src={image_product_4_thumbnail}
              className="Image_sm Image_sm--hover"
              id="image_product_4_thumbnail"
              onClick={(e) => {
                handleImageClick(e);
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
