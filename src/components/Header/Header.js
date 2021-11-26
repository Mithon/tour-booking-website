import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import '../Services/Services';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
    }
    return (


        <Navbar bg="dark" variant="dark" >
            <Container className="justify-content-center my-4 " >
                <Nav className="">
                    <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                    <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink activeStyle={activeStyle} to="/services">services</NavLink>
                    <NavLink activeStyle={activeStyle} to="/blog">Blog</NavLink>
                </Nav>
            </Container>
        </Navbar>



    );
};

export default Header;