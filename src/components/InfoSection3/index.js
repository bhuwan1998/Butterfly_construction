import React from 'react'; 
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle, fadeIn, fadeOut, Img, ImgWrap, Column1, Column2} from './InfoElements3';
import constsvg from '../images/contract.svg';
export const InfoSection3 = ({lightBg, id, imgStart, topLine,lightText, headLine, darkText, alt}) => {
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
                            <fadeIn> 
                                <div className="row">
                                <div className="col-xs col-md"> 
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
                                        <br />
                                        <h4> New build from scratch </h4>
                                        <p>
                                            Our aim is to carry on building on our track record of the new build properties that are not only meeting the minimum new build standards but also exceeding the client expectations. 
                                        </p>
                                        <br/> 
                                        <h4> Project management/supervising </h4>
                                        <p>
                                        Butterfly also offers most effective project management solutions to get all your projects finished on time whilst sticking to the budget  
                                        </p> 
                                    </div>
                                </div>
                             
                                 </fadeIn>
                           </Subtitle>
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
