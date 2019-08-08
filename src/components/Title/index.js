import React from 'react';
import Navbar from 'react-bootstrap/Navbar'


const Title = () => {
    return (
        <>
            <Navbar className='row' expand="lg" bg="dark" variant="dark" >
                <div className='col-md-12 text-center'>
                    <Navbar.Brand className=''>Split n' Tip</Navbar.Brand>
                </div>
            </Navbar>
        </>
    )
}

export default Title;