import React from 'react';
import styled from "styled-components";

type ServiceCardProps = {
    image?: string,
    width?: string,
    height?: string,
    wCard?: string,
    hCard?: string,
    h2?: string,
    h3?: string,
    top?: string,
    left?: string,
    maxWidth?: string,
}
export const ServiceCard = (props: ServiceCardProps) => {
    return (
        <StyledServiceCard  wCard={props.wCard} hCard={props.hCard}>
            <StyledIMG top={props.top} left={props.left} src={props.image} width={props.width} height={props.height} />
            <StyledTextWrap maxWidth = {props.maxWidth}>
                <StyledH2>{props.h2}</StyledH2>
                <StyledH3>{props.h3}</StyledH3>
            </StyledTextWrap>
        </StyledServiceCard>
    );
};


const StyledServiceCard = styled.div<ServiceCardProps>`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: end;
  padding:  0;
  gap: 20px; 
  width: ${props => props.wCard || '100%'};
  height: ${props => props.hCard || 'auto'};
  background: rgba(250, 255, 255, 0.7);
  border: 0.5px solid #ECEEED;
  backdrop-filter: blur(25px);
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  
`;

const StyledIMG = styled.img<ServiceCardProps>`
  width: ${props => props.width || '200px'}; 
  height: ${props => props.height || '185px'}; 
  object-fit: contain; 
  position: absolute;
  left: ${props => props.left || '-20%'};
  top: ${props => props.top || '-10%'};
`;

const StyledTextWrap = styled.div<ServiceCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  text-align: center;
  gap: 10px;
 // max-width: 290px;
  margin-right: 10px;
  max-width: ${props => props.maxWidth || '290px'};
`;

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.2;
  letter-spacing: 0.18px;
  text-align: center;

  text-transform: capitalize;
  color: #44625A;
  @media (max-width: 768px) {
    font-size: 24px;

  }`;

const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: #44625A;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;

  }
`;
