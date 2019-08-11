import React from 'react';
import Navbar from 'react-bootstrap/Navbar'


const Title = () => {
    return (
        <>
            <Navbar className='row' expand="lg" bg="dark" variant="dark" >
                <div className='col-md-12 text-center'>
                    <Navbar.Brand className='' style={{fontFamily: 'Nanum Brush Script', fontSize: '8vw'}}>Split n' Tip</Navbar.Brand>
                </div>
            </Navbar>
        </>
    )
}

export default Title;