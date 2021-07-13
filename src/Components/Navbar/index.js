import React from 'react';
import {Nav,NavIcon,NavLink,Bars} from "./Navbar";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
               <NavLink to="/">Pizza</NavLink>
               <NavIcon onClick={toggle}>
                   <p>Menu</p>
                   <Bars/>
               </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
