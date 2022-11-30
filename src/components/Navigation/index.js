import React from "react";
import jwt_decode from "jwt-decode"

import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavText
} from "./NavbarElements";
import Logo from './logo_transparent.png';





const token = localStorage.getItem("token")
//const decoded = jwt_decode(token)



let navbar_elements = <>
<Nav>
 <NavLogo to="/">
 <img src={Logo} height={110} alt={""} width={110} left={-20} />
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
     <NavText activeStyle>
         Blog
     </NavText>
     <NavLink to="/cart" activeStyle>
         Cart
    </NavLink>
     <NavBtn >
         <NavBtnLink  to="/signin">Log in</NavBtnLink>                
     </NavBtn>
 </NavMenu> 
</Nav> 
<br/>
</>

const Navbar = () => {
    
    if (token){
        const decoded = jwt_decode(token)
        let expirationDate = decoded.exp;
         let current_time = Date.now() / 1000;
         if(expirationDate < current_time)
         {
             localStorage.removeItem("token");
         } else {
            console.log("Valid token");   
         
            const user_name = localStorage.getItem('user')
            navbar_elements = <>
            <Nav>
             <NavLogo to="/">
             <img src={Logo} height={110} alt={""} width={110} left={-20} />
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
                 <NavText activeStyle>
                     Blog
                 </NavText>
                 <NavLink to="/cart" activeStyle>
                     Cart
                 </NavLink>
                 <NavBtn >
                     <NavBtnLink  to="/signin">Log in</NavBtnLink>                
                 </NavBtn>
             </NavMenu> 
            </Nav> 
            <br/>
            </>
    
          }
      }

    //let currentDate = new Date();
    //if (decoded.exp * 1000 < currentDate.getTime()) {
    //    console.log("Token expired.");
    //  } 
    return (
        navbar_elements 
    );
};
export default Navbar;