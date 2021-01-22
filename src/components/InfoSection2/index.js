import React from 'react'; 
import {Button} from '../ButtonElement';
import constsvg from '../images/city.svg';
import {InfoContainer, InfoWrapper, InfoRow2, TextWrapper, TopLine, Heading, Subtitle,BtnWrap, Img, ImgWrap, Column1, Column2} from './InfoElements2';


export const InfoSection2 = ({lightBg, id, imgStart, topLine,lightText, headLine, darkText, description, buttonLabel, alt, primary, dark, dark2, img}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow2 img={imgStart}>
                    <Column1>
                      <TextWrapper> 
                          <TopLine> {topLine} </TopLine>
                          <Heading lightText={lightText}> {headLine}  </Heading>
                          <Subtitle darkText={darkText}> {description} </Subtitle>
                          <BtnWrap> 
                              <Button to="home"
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>
                                 {buttonLabel} </Button>
                          </BtnWrap>    
                      </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                     <Img src={constsvg} alt={alt}/>
                     </ImgWrap>
                    </Column2>
                </InfoRow2> 
            </InfoWrapper>
        </InfoContainer>     
        </>
    )
}
