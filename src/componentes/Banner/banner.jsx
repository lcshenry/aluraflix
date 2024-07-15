import { styled } from "styled-components";
import PropTypes from 'prop-types';
import bannerBackground from '../../assets/banner.png'
import { useContext, useState } from "react";
import { GlobalContext } from '../../context/GlobalContext'

const BannerContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;  
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
const FigureEstilizada = styled.figure`
    background-image: url(${bannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 80vh;
    margin: 0;
    padding: 0 5%;
    min-height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        
        height: 50vh;
        
    }

    @media (max-width: 480px) {
        display:none;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 50%;
    z-index: 1;
    

    @media (max-width: 768px) {
        width: 100%;
        text-align: start;
    }
    
`
const VideoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    overflow: hidden;
    margin: 10px;
    width: 30%;
    border: 3px solid #6BD1FF;
    border-radius: 15px;
    z-index: 1;
    cursor: pointer;
    height: auto;

    img, iframe{
        width: 100%;
        height: 33vh;
        border-radius: 15px;
    }
    @media (max-width: 768px) {
        min-width: 30%;
    }
    
`
const ShadowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 4px 29px rgba(107, 209, 255, 0.75);
    z-index: 2;
    pointer-events: none;
`
const TituloEstilizado = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 46px;
    color: #FFFFFF;
    max-width: 80%;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`
const Texto = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 18px;
    color: #FFFFFF;
    max-width: 65%;
    

    @media (max-width: 768px) {
        font-size: 14px;
    }
`
const BotonFront = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6BD1FF;
    color: #FFFF;
    font-weight: 600;
    font-size: 48px;
    border-radius: 10px;
    width: 296.82px;
    height: 92px;
    border: none;
    
    @media (max-width: 768px) {
        width: 250px;
        height: 50px;
        font-size: 28px;
    }
`

const Banner = ({ titulo, texto }) => {
    const { globalState } = useContext(GlobalContext);
    const video = globalState.videos.find(video => video.id == 1);

    const [isPlaying, setIsPlaying] = useState(false);
    
    const handlePlayVideo = () => {
        setIsPlaying(true);
    };
    return(
        <BannerContainer>
            <FigureEstilizada src={bannerBackground}>
            <TextContainer>
                    <BotonFront>FRONT END</BotonFront>
                    <TituloEstilizado>{titulo}</TituloEstilizado>
                    <Texto>{texto}</Texto>
                </TextContainer>
                    <VideoCard >
                        {isPlaying ? (
                            <iframe 
                                src={video.link}
                                title="Video"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"  
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={video.photo} alt="video thumbnail" onClick={handlePlayVideo}/>
                        )}
                        <ShadowContainer/>
                    </VideoCard>
            </FigureEstilizada>
        </BannerContainer>
    );
}

export default Banner