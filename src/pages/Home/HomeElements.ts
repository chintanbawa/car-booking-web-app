import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_RED, RED, WHITE } from "../../utils/colors";

export const Container = styled.div`
    display: flex;      
    flex-direction: row;
    height: calc(100vh - 80px);
    padding-left: calc((100vw - 1100px) / 2);
    padding-right: calc((100vw - 1500px) / 2);
    margin: 0px 24px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`

export const FirstContainer = styled.div`
    display: flex;
    flex: 4;    
    flex-direction: column;
    justify-content: center; 
    padding-right: 1.2rem;

    @media screen and (max-width: 1024px){
        padding-right: 0px;
    }
`

export const HeadingText = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin: 0.5rem 0px;
    color: ${RED};

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`

export const SubHeadingText = styled.p`
    font-size: 2.3rem;
    margin: 0.5rem 0px;

    @media screen and (max-width: 768px){
        font-size: 1.8rem;
    }
`

export const InfoText = styled.p`
    font-size: 1.3rem;
    margin: 0.5rem 0px;
    text-align: justify;

    @media screen and (max-width: 768px){
        font-size: 1.1rem;
    }
`

export const BookACarButton = styled(Link)`
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    padding: 1rem 4rem;
    margin-top: 1rem;
    border-radius: 5px;
    background-color: ${RED};
    transition: 0.2s ease-in-out;
    color: ${WHITE};
    font-weight: bold;

    @media screen and (max-width: 768px){
        font-size: 1.1rem;
    }

    &:hover {
        background-color: ${DARK_RED};
        transition: 0.2s ease-in-out;
    }
`

export const SecondContainer = styled.div`
    display: flex;
    flex: 6;    
    align-items: center;
    justify-content: center;
    padding: 0px;
    
    @media screen and (max-width: 1024px){
        padding: 3rem 0px;
    }
`

export const HomeCarImage = styled.img`
    width: 100%;
    object-fit: contain
`

