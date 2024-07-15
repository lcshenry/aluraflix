import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import logo from "../../assets/logoAlura.png";
import BotaoHome from "../Botao/botaoHome";
import home from "../../assets/home.png";
import novoVideo from "../../assets/NovoVideo.png";



const Foot = styled.nav `
    margin-top:5%;
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7),
                inset 0px 100px  rgba(34, 113, 209, 0.05);
    

    img{
        width: 100%;
        height: 100%;
    }

    @media ( max-width:430px){
        
        .logo{
            display: none;
        }
    }
`
const Butons = styled.div`
    display: none;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        gap:20%;
        

        .home{
            width: auto;
            height: auto;
            cursor: pointer;
        }

        .nuevoVideo{
            width: auto;
            height: auto;
            cursor: pointer;
        }
        
    }
`
const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const Footer = () => {
    return (
        <Foot>
            <Link to="/" style={LinkStyle}>
                <img className="logo" src={logo} alt="Logo de Space App" />
            </Link>
            
            <Butons>
                <Link to="/" style={LinkStyle}>
                <BotaoHome><img className="home" src={home} alt="Home"/>HOME</BotaoHome>
                </Link>
                <Link to="/NovoVideo" style={LinkStyle}>
                    <img className="novoVideo" src={novoVideo} alt="novoVideo"/>
                </Link>
            </Butons>
        </Foot>
    )
}

export default Footer