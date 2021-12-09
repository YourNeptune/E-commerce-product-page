import React from "react";
import { Modal, Button } from "react-bootstrap";
import ModalItem from "./ModalItem";

const CartModal = () => {
  return (
    <div className="CartModal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body className="CartModal__Body">
          <ModalItem />
        </Modal.Body>
        <Button className="CartModal__checkoutButton">Checkout</Button>
      </Modal.Dialog>
    </div>
  );
};

export default CartModal;
