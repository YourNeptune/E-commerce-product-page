import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoSVG from "../images/logo.svg";
import cartSVG from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

const NavBar = () => {
  return (
    <div>
      <Navbar className="myNav">
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src={logoSVG} className="logo" alt=""/>
          </Navbar.Brand>
          <Nav className="nav-part1 me-auto">
            <Nav.Link href="#Collection" className="nav-part1--margin" style={{}}>Collection</Nav.Link>
            <Nav.Link href="#Men" className="nav-part1--margin">Men</Nav.Link>
            <Nav.Link href="#Women" className="nav-part1--margin">Women</Nav.Link>
            <Nav.Link href="#About" className="nav-part1--margin">About</Nav.Link>
            <Nav.Link href="#Contact" className="nav-part1--margin">Contact</Nav.Link>
          </Nav>
          <Nav className="nav-part2">
            <Nav.Link href="#Cart"><img src={cartSVG} /></Nav.Link>
            <Nav.Link href="#Profile"><img src={avatar} className="avatar"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
