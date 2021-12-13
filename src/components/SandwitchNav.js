import React, { useState } from "react";
import {Offcanvas,Navbar,Nav} from "react-bootstrap";

const SandwitchNav = ({ closeNavModal }) => {
  return (
    <>
      <Offcanvas show={true} onHide={closeNavModal} className="sandwitchNav__Container">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar>
            <Nav className="sandwitchNav__links me-auto">
              <Nav.Link href="#Collection" className="">
                Collection
              </Nav.Link>
              <Nav.Link href="#Men" className="">
                Men
              </Nav.Link>
              <Nav.Link href="#Women" className="">
                Women
              </Nav.Link>
              <Nav.Link href="#About" className="">
                About
              </Nav.Link>
              <Nav.Link href="#Contact" className="">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SandwitchNav;
