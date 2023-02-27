import React from 'react'
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const StickyNav = () => {
  return (
    <div>
      <Navbar>
            <Container>
              <Navbar.Brand href="#home">
                <button className="login-btn mt-2">Login or Register</button>
              </Navbar.Brand>
            </Container>
          </Navbar>
    </div>
  )
}

export default StickyNav
