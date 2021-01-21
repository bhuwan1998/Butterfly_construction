import React,{useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper
, ArrowForward, ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';

export const HeroSection = () => {

const [hover, setHover] = useState(false); 

const onHover = () => {
    setHover(!hover);
}

    return (
        <HeroContainer id="home">
            <HeroBg> 
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent> 
                <HeroH1> Butterfly Buildings </HeroH1>
                <HeroP> Tag Line Here  </HeroP> 
            
            <HeroBtnWrapper> 
                <Button to="signup" onMouseEnter={onHover} onMouseleave={onHover} primary='true'
                    dark='true'>
                    Learn More {hover ? <ArrowForward /> : <ArrowRight/> } 
                </Button> 
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}
