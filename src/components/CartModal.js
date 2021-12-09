import React from "react";
import { Modal, Button } from "react-bootstrap";
import ModalItem from "./ModalItem";

const CartModal = ({number}) => {
  return (
    <div className="CartModal">
      <Modal.Dialog className="CartModal__Modal">
        <Modal.Header>
          <Modal.Title className="CartModal__Title">Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body className="CartModal__Body">
          <ModalItem number={number}/>
        </Modal.Body>
        <Button className="CartModal__checkoutButton">Checkout</Button>
      </Modal.Dialog>
    </div>
  );
};

export default CartModal;
