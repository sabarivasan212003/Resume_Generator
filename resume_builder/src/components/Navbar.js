import { style } from '@mui/system';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/navbar.css';
function Navbar() {
    return ( 
        <nav className='navbar'>
            <div className='container'>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" style={{width:'30px'}} onClick={()=>{alert('')}} >
                     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
            <h3 className='logo1'>RESUME.IO</h3>
            <ul className='nav-links'>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/con'><li>Contact us</li></Link>
                <Link to='/create'><li>Templates</li></Link>
                {/* <Link to='/service'><li>service</li></Link> */}
                {/* <Link to='/skills'><li>skills</li></Link> */}
                <Link to='/signup'><li>SIGNUP</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
            </ul>
            </div>
        </nav>
     );
}

export default Navbar;