import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { DARK_RED, RED, WHITE } from "../../utils/colors";


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;    
    z-index: 12;
    padding: 0 calc((100vw - 1100px) / 2);
`

export const AppLogo = styled.img`
  width: 150px;
  height: 100%;
  object-fit: contain;
  margin-left: 24px;
`

export const NavLink = styled(Link)`
  color: ${WHITE};
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
    color: ${RED};
  }

  &:hover {
    transition: color 0.2s ease-in-out;
    color: ${RED};
  }
`

export const MobileIcon = styled.div`
  display: none;
  color: ${WHITE};
  @media screen and (max-width: 920px) {
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

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.li`

`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: ${RED};
  padding: 10px 40px;
  color: ${WHITE};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${DARK_RED};    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

