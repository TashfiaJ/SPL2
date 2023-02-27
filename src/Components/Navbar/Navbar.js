import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import StickyNav from "./StickyNav";
import Menu from "../Menu/Menu";

const Navigation = () => {
  
  const handleClick = () => {
    console.log("click")
    const element = document.getElementById('menu')
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
    <StickyNav />
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link to="/">
                <img
                  alt=""
                  src="/logo.png"
                  className="d-inline-block align-top logo"
                />{" "}
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <div className="col-7 mt-3">
          <img src="./world.gif" alt="world" width="30%"/>
          <Card body className="text-center mx-auto mt-4">“WizMap”, a world-map based website that can help students learn more about the world, with quizzing and personalized learning features. </Card>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>Start Exploring!</button>
    </div>
    <div id="menu">
      <Menu />
    </div>
    </>
  );
};

export default Navigation;
