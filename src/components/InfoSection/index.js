import React from 'react'; 
import {Button} from '../ButtonElement';
import constsvg from '../images/const.svg';
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle,BtnWrap, Img, ImgWrap, Column1, Column2} from './InfoElements';

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
                          <div className="row">
                            <div className="col-md col-xs"> 
                                 <p>
                                Butterfly  buildings  area  part  of  the  Butterfly  portfolio.  
                                The  aim  is  to  build  houses  and buildings  for  our  clients like 
                                we  are  building  our  own.  Our  team  comprises  of  qualified professionals  from  the  building  and construction  industry.We  are  a  construction  companyhonestly   and   reliably.   Along   with   high-quality   construction   work,   we   offer   a   much personalised  service  so  that  you  will directly work  with  our  customer  relationship manager who will help you from day onetill your keys are handed over.
                                </p>
                                <br />
                                <p>
                                     Highest  quality  of  construction  products – We  only  use  the  best  quality  materials  for  our projects and equip from suppliers that have worked with us for years 
                                </p>
                                <br /> 
                                <p>
                                    We  go  by  a  schedule  and  deliver  on  time - After  offering  a  quote,  we  provide  a  detailed breakdown of the key deadlines by which we promise
                                    to deliver each stage of the project. 
                                </p> 
                            </div>

                          </div>
                          
                           </Subtitle>
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
                     <div className="row">
                         <div className="col-xs col-md">
                             <Img src={constsvg} alt={alt}/> 
                         </div>   
                     </div>
                    
                     </ImgWrap>
                    </Column2>
                </InfoRow> 
            </InfoWrapper>
        </InfoContainer>     
        </>
    )
}
