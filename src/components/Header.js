import React, { useState, useEffect } from 'react'
import { Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>수강심청이</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  export default Header