import { styled } from "styled-components";
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import BotaoIcone from "../../Botao/botaoIcone";
import eliminar from '../../../assets/eliminar.png'
import editar from '../../../assets/editar.png'



const categoryColors={
    "FRONT END": "rgba(107, 209, 255, 0.75)",
    "BACK END": "rgba(0, 200, 111, 0.75)",
    "INNOVACIÓN Y GESTIÓN": "rgba(255, 186, 5, 0.75)"
}

const Figure = styled.figure`
    width: 100%;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 15px;

    
`

const VideoCard = styled.div.attrs(props => ({
    style: {
        borderColor: categoryColors[props.category]
    }
}))`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 10px;
    border-width: 5px;
    border-style: solid;
    border-radius: 15px;
    width: 100%;
    margin: 5% 0;

    img {
        width: 100%;
        z-index: 1;
        object-fit: cover;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        min-width: 250px; 
    }
    @media (max-width: 430px) {
        width: 100%;
        min-width: 340px; 
    }
`;
const ShadowContainer = styled.div.attrs(props => ({
    style: {
        boxshadow: `inset 0px 4px 29px ${categoryColors[props.category]}`
    }
}))`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
`
const Pie = styled.div.attrs(props => ({
    style: {
        borderTopColor: categoryColors[props.category],
        boxShadow: `0 4px 29px 0 ${categoryColors[props.category]}`
    }
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #03122F;
    border-top-width: 5px;
    border-top-style: solid;
    z-index: 2;
    max-height: 3rem;
`;
// const LinkStyle = {
//     textDecoration: 'none',
//     color: 'inherit',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Card = ({ video }) => {
    const { globalState } = useContext(GlobalContext);
    
    return (
        <Figure>
            <VideoCard category={video.category}>
                <StyledLink href={video.link} target="_blank" rel="noopener noreferrer">
                    <img src={video.photo} alt="video thumbnail" />
                </StyledLink>
                <Pie category={video.category}>
                    <BotaoIcone onClick={() => globalState.handleDelete(video)}>
                        <img className="botao" src={eliminar} alt="Eliminar" />
                        BORRAR
                    </BotaoIcone>

                    <BotaoIcone onClick={() => globalState.handleEdit(video)}>
                        
                        <img className="botao" src={editar} alt="Editar" />
                        EDITAR
                    </BotaoIcone>
                </Pie>
                
                <ShadowContainer category={video.category}/>
            </VideoCard>
    </Figure>)
};

Card.propTypes = {
    video: PropTypes.object.isRequired,
};

export default Card;
