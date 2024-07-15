import { styled } from "styled-components"


const BotaoIcone = styled.button`
        
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #FFFF;
    font-weight: 600;
    background-color: transparent;
    height: 54px;
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    .botones {
        width: 60%;
        height: 60%;
        pointer-events: none;
        border: none;
    } 
    @media (max-width: 768px) {
        font-size: 0.8rem;

    }
`
export default BotaoIcone
