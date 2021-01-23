import React from 'react'; 
import {Button} from '../ButtonElement';
import constsvg from '../images/const.svg';
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle,BtnWrap, Img, ImgWrap, Column1, Column2} from './InfoElements3';

export const InfoSection = ({lightBg, id, imgStart, topLine,lightText, headLine, darkText, description, buttonLabel, alt, primary, dark, dark2, img}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow img={imgStart}>
                    <Column1>
                      <TextWrapper> 
                          <TopLine> {topLine} </TopLine>
                          <Heading lightText={lightText}> {headLine}  </Heading>
                          <Subtitle darkText={darkText}> 
                          <div> 
                              <h4> House Extensions</h4>
                                 <p>
                                    Extensions that match or suits the design of existing work, making sure it doesn't lose the charm.
                                </p>
                                <br />
                                <h4> Renovations </h4>
                                <p>
                                    We can either work as per your design or provide recommendations that bestsuits the existing architecture. 
                                </p>
                                <br /> 
                                <h4> Custom design and build </h4>
                                <p>
                                    Built to your needs, tailored with a draftsman we will make sure we give you everything you are looking for and more
                                </p> 
                                <h4> New build from scratch </h4>
                                <p>
                                    Our aim is to carry on building on our track record of the new build properties that are not only meeting the minimum new build standards but also exceeding the client expectations. 
                                </p> 
                                <h4> Project management/supervising </h4>
                                <p>
                                Butterfly also offers most effective project management solutions to get all your projects finished on time whilst sticking to the budget  
                                </p> 
                            </div>
                           </Subtitle>
                          {/* <BtnWrap> 
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
                          </BtnWrap>     */}
                      </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                     <Img src={constsvg} alt={alt}/>
                     </ImgWrap>
                    </Column2>
                </InfoRow> 
            </InfoWrapper>
        </InfoContainer>     
        </>
    )
}
