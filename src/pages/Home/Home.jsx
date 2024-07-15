import styled from "styled-components";
import Header from "../../componentes/Header/header";
import Banner from "../../componentes/Banner/banner";
import Categorias from "../../componentes/Categoria/Categorias";
import ModalZoom from "../../componentes/Modal/modal";
import Footer from "../../componentes/Footer/Footer";
import GlobalContextProvider from "../../context/GlobalContext";


const Fundo= styled.div`
    background: #262626;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;

const MainContainer = styled.main`
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`;
const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
`;


const Home = () =>{
    
    return <>
        <Fundo>
        
            <GlobalContextProvider>
                
                <Header />
                <MainContainer>
                    <ConteudoGaleria>
                        <Banner
                            titulo="Challenge React"
                            texto="Challange Front-end em React"
                        />
                        <Categorias />
                        <ModalZoom />
                    </ConteudoGaleria>
                </MainContainer>
                <Footer />
            </GlobalContextProvider>
        </Fundo>
    </>
}

export default Home