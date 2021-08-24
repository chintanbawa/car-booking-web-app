import styled from "styled-components";
import { OFF_WHITE, RED, TEXT_COLOR, WHITE } from "../../utils/colors";

export const Container = styled.div`
    display: grid;    
    grid-template-columns: auto auto auto;    
    grid-gap: 1.5rem; 
    padding: 4rem calc((100vw - 1100px) / 2);
    margin: 0px 24px;  

    @media screen and (max-width: 800px) {
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: auto;
    }
`

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;    
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all .2s ease-in-out;
    border: 3px transparent solid;

    &:hover {
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1.1); /* Safari 3-8 */
        transform: scale(1.05);
        border: 3px ${RED} solid;
    }
`

export const CarImage = styled.img`
    width: 100%;    
    aspect-ratio: 1;    
    background-color: ${OFF_WHITE};
`

export const CarInfoContainer = styled.div`    
    padding: 0.5rem;
    background-color: ${OFF_WHITE};    
`

export const CarNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
`

export const CarName = styled.h3`
    flex:1;
    color: ${TEXT_COLOR};
    margin: 5px 0px;
`

export const BookButton = styled.button`
    color: ${WHITE};
    background-color: ${RED};
    border: none;
    border-radius: 5px;
    padding: 0.5rem;    
    cursor: pointer;
`

export const CarDescription = styled.p`    
    height: 40px;
    color: ${TEXT_COLOR};
    text-align: justify;
    margin: 5px 0px;
    overflow: hidden;
`
