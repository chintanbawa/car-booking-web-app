import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'

interface AsideProps {
    isOpen: boolean
}
export const Aside = styled.aside<AsideProps>`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    z-index: 999;
`

export const Icon = styled.div`      
    font-size: 2rem;
    cursor: pointer;
    align-self: flex-end;
    margin: 1.2rem 1.5rem;
    
`

export const CloseIcon = styled(FaTimes)`      
    transition: 0.2s ease-in-out;
    color: #fff;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #EB001E;
    }
`

export const SidebarItem = styled(Link)`    
    text-decoration: none;
    list-style: none;
    color: #fff;
    display: flex;
    padding: 1rem;    
    justify-content: center;
    font-size: 1.2rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #EB001E;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarBtn = styled(Link)`
    background-color: #EB001E;
    text-decoration: none;
    list-style: none;
    display: flex;    
    align-self: center;
    justify-content: center;
    padding: 1rem 5rem;
    margin-top: 2rem;
    border-radius: 10px;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #B90019;
        transition: 0.2s ease-in-out;
    }
`