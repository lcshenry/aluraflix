import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import logo from "../../assets/logoAlura.png";
import BotaoHome from './../Botao/botaoHome';
import BotaoNV from "../Botao/botaoNV";

const Nav = styled.nav `
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: #262626;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.75);
    width: 100%;
    z-index: 2;

    img{
        width: 168.45px;
        height: 40px;
    }

    @media (max-width: 430px) {
        display: none;
    }

`
const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    
    @media (max-width: 768px) {
        gap: 15px;
        width: 50%;
        
    }
`
const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const Header = () => {
    return (
        <Nav>
            <Link to="/" style={LinkStyle}>
                <img src={logo} alt="Logo de Space App" />
            </Link>
            <Botoes>
                <Link to="/" style={LinkStyle}>
                    <BotaoHome>HOME</BotaoHome>
                </Link>
                <Link to="/NovoVideo" style={LinkStyle}> 
                    <BotaoNV>Novo Video</BotaoNV>
                </Link>
                
            </Botoes>
            
        </Nav>
    )
}

export default Header


