import React from "react";


import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavText
} from "./NavbarElements";
import Logo from './logo_transparent.png';
//import {ReactComponent as Logo} from './test.svg'; 

let navbar_elements = <>
<Nav>
 <NavLogo to="/">
 <img src={Logo} height={110} alt={""} width={110} left={-30} />
 </NavLogo>

 <NavMenu>
     <NavLink to="/" activeStyle>
        
     </NavLink>
    
     <NavLink to="/signup" activeStyle>
         Register
     </NavLink>
     <NavLink to="/order_history" activeStyle>
         Orders
     </NavLink>
     <NavLink to="/myaccount" activeStyle>
         My account
     </NavLink>
     <NavBtn >
         <NavBtnLink  to="/signin">Log in</NavBtnLink>                
     </NavBtn>
 </NavMenu> 
</Nav> 
<br/>
</>

const Navbar = () => {

    if (localStorage.getItem("user") === null) {
        
      }
      else{
        const user_name = localStorage.getItem('user')
        navbar_elements = <>
        <Nav>
         <NavLogo to="/">
         <img src={Logo} height={110} alt={""} width={110} left={-30} />
         </NavLogo>
        
         <NavMenu>
             <NavLink to="/" activeStyle>
                
             </NavLink>


             <NavText activeStyle>
                 Hello {user_name}
             </NavText> 
             <NavLink to="/signup" activeStyle>
                 Register
             </NavLink>
             <NavLink to="/order_history" activeStyle>
                 Orders
             </NavLink>
             <NavLink to="/myaccount" activeStyle>
                 My account
             </NavLink>
             <NavBtn >
                 <NavBtnLink  to="/signin">Log in</NavBtnLink>                
             </NavBtn>
         </NavMenu> 
        </Nav> 
        <br/>
        </>

      }
    return (
        navbar_elements 
    );
};
export default Navbar;