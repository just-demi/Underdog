import React from "react";


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
               
                <NavLink to="/signup" activeStyle>
                    Register
                </NavLink>
                <NavLink to="/order_history" activeStyle>
                    Orders
                </NavLink>
                <NavLink to="/order_page" activeStyle>
                    My account
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