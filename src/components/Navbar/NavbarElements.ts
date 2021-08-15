import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;    
    z-index: 12;
`

export const AppLogo = styled.img`
  width: 150px;
  height: 100%;
  object-fit: contain;
`

export const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.1rem;
  margin: 0px 8px;
  transition: color 0.2s ease-in-out;

  &.active {
    color: #EB001E;
  }

  &:hover {
    transition: color 0.2s ease-in-out;
    color: #EB001E;
  }
`

export const MobileIcon = styled.div`
  display: none;
  color: white;
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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.li`

`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #EB001E;
  padding: 10px 40px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #B90019;    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

