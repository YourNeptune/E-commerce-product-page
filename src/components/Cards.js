import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import image_product_1 from "../images/image-product-1.jpg"
import image_product_2 from "../images/image-product-2.jpg"
import image_product_3 from "../images/image-product-3.jpg"
import image_product_4 from "../images/image-product-4.jpg"
import image_product_1_thumbnail from "../images/image-product-1-thumbnail.jpg"
import image_product_2_thumbnail from "../images/image-product-2-thumbnail.jpg"
import image_product_3_thumbnail from "../images/image-product-3-thumbnail.jpg"
import image_product_4_thumbnail from "../images/image-product-4-thumbnail.jpg"

const Cards = () => {
    return (
        <Container className="cardsContainer">
            <Row  className="myRow">
                <Col className="myCol"><Image src={image_product_1} className="Image_big"/></Col>
            </Row>
            <Row className="Cards_sm_Row " sm={4}>
                <Col><Image src={image_product_1_thumbnail}  className="Image_sm"/></Col>
                <Col><Image src={image_product_2_thumbnail}  className="Image_sm"/></Col>
                <Col><Image src={image_product_3_thumbnail}  className="Image_sm"/></Col>
                <Col><Image src={image_product_4_thumbnail}  className="Image_sm"/></Col>
            </Row>
        </Container>
    )
}

export default Cards
