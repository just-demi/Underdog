import React from "react";
import {Container,} from 'react-bootstrap'

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import Logo from './logo_transparent.png';
//import {ReactComponent as Logo} from './test.svg'; 

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
            <img src={Logo} height={110} alt={""} width={110} left={-30} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                   
                </NavLink>
               
                <NavLink to="/aboutus" activeStyle>
                    About us
                </NavLink>
                <NavLink to="/contact_us" activeStyle>
                    Contact us
                </NavLink>
                <NavLink to="/order_page" activeStyle>
                    Order
                </NavLink>
                <NavBtn >
                    <NavBtnLink  to="/signin">Log in</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
           <br/>
        </>
    );
};
export default Navbar;