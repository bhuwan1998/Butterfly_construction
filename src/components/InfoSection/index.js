import React from 'react'; 
import {Button} from '../ButtonElement';

import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle,BtnWrap, Img, ImgWrap, Column1, Column2} from './InfoElements';


export const InfoSection = ({lightBg, id, imgStart, topLine,lightText, headLine, darkText, description, buttonLabel,  img, alt}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow img={imgStart}>
                    <Column1>
                      <TextWrapper> 
                          <TopLine> {topLine} </TopLine>
                          <Heading lightText={lightText}> {headLine}  </Heading>
                          <Subtitle darkText={darkText}> {description} </Subtitle>
                          <BtnWrap> 
                              <Button to="home" > {buttonLabel} </Button>
                          </BtnWrap> 
                      </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                        <Img src={img} alt={alt}/>
                     </ImgWrap>
                    </Column2>
                </InfoRow> 
            </InfoWrapper>
        </InfoContainer>     
        </>
    )
}
