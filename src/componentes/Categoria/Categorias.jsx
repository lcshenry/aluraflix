import CategoriaFront from "./CategoriaFront/categoriaFront";
import CategoriaBack from './CategoriaBack/categoriaBack';
import CategoriaInovacaoEGestao from "./CategoriaInnovacao/categoriaInnovacion";
import styled from "styled-components";

const CategoriasContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 2%;

    @media (max-width: 768px) {
        margin-top: 10%;
    }
`;

const Categorias = () => {  
    
    return (

        <CategoriasContainer>
            <CategoriaFront />
            <CategoriaBack />
            <CategoriaInovacaoEGestao />                                       
        </CategoriasContainer>
    )
}

export default Categorias

