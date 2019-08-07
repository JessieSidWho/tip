import React from 'react';
import Navbar from 'react-bootstrap/Navbar'


const Title = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="#home">Split n' Tip</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;