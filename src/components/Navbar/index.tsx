import { MouseEventHandler } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { AppLogo, MobileIcon, Nav, NavBtn, NavBtnLink, NavLink, NavLinkContainer, NavMenu } from './NavbarElements'
import Logo from '../../assets/images/logo.png'

import { FaBars } from 'react-icons/fa';

interface NavbarProps {
    toggleSidebar: MouseEventHandler;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <Nav>
            <MobileIcon onClick={toggleSidebar}>
                <FaBars />
            </MobileIcon>

            <Link to='/'>
                <AppLogo src={Logo} alt='Logo' />
            </Link>

            <NavMenu>
                <NavLinkContainer>
                    <NavLink to='/' exact>Home</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavLink to='/cars' >Cars</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavLink to='/about'>About</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavLink to='/contactus'>Contact Us</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </NavLinkContainer>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav >
    )
}

export default Navbar

