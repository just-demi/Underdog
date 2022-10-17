import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: white;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #ffffff;
  font-size: 2rem;
  text-decoration: none;
  margin-left: -120px;

`;


export const NavLink = styled(Link)`
color: grey;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
font-size: 20px;
height: 100%;
cursor: pointer;
font-weight: bold;
&.active {
  color:black;
}
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 9px;
  background: black;
  padding: 10px 22px;
  font-size: 2rem;
  color: white;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  margin-right: -150px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #808080;
  }
`;