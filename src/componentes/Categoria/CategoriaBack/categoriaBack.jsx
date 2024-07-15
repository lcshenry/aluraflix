import { styled } from "styled-components"
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Card from "../Card/card";

const BackContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1%;

    @media (max-width: 768px) {
        align-items: center;
    }
`
const BotonBackGrande = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00C86F;
    color: #FFFF;
    font-weight: 600;
    font-size: 32px;
    border-radius: 10px;
    width: 432px;
    height: 70px;
    border: none;
    margin: 0 0.5%;

    @media (max-width: 430px) {
        width: 100%;
        font-size: 1.5rem;
    } 
`
const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    -webkit-overflow-scrolling: touch;
    gap: 2rem;
    padding-bottom: 10px;
    margin: 0;

    &::-webkit-scrollbar{
            background-color: rgba(34, 113, 209, 0.17);
            height: 20px;
            border-radius: 10px;
        }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(34, 113, 209);
        border-radius: 10px;
        border: 5px solid transparent; 
        box-sizing: border-box;
        height: 10px;
        background-clip: padding-box;
    }

    @media (max-width: 768px) {
        flex-wrap: nowrap;
        width: 80%;
        overflow-x: auto;
        overflow-y: hidden;
        gap: 3rem;
        

    }   

    @media (max-width: 430px) {
        overflow-x: auto;
        width: 90%;
    }
`



const CategoriaBack = () => {
    const { globalState } = useContext(GlobalContext);

    return (
        <BackContainer>
            <BotonBackGrande>BACK END</BotonBackGrande>
            <VideoContainer>
                {globalState.backEndVideos.map(video => (
                    <Card
                    key={video.id}
                    video= {video}
                    edit={() => globalState.handleEdit(video)}
                    delete={() => globalState.handleDelete(video)}
                />
                    
                ))}
            </VideoContainer>
        </BackContainer>  
    )
}



export default CategoriaBack

