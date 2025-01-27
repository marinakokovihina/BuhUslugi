import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container/Container";
import img from "../../assets/img/Phone.png"
export const AboutCompany = () => {
    return (
        <StyledAbout id = "about">
            <Container>
                <StyledWrap>
                    <StyledWrapL>
                        <StyledImg src = {img}/>

                    </StyledWrapL>
                    <StyledWrapR>
                        <StyledH5>О компании</StyledH5>
                        <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque. Tortor condimentum lacinia quis vel eros donec.</StyledP>
                    </StyledWrapR>
                </StyledWrap>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.div `
  background: linear-gradient(90deg, #CFE3DB 0%, #94B0A7 100%);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`

const StyledImg = styled.img `
  width: 367px;
  height: 317px;
  @media (max-width: 768px) {
    width: 212px;
    height: 181px;
  }
`
const StyledWrap = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 279px;
  }
`

const StyledWrapL = styled.div `

`

const StyledWrapR = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px; 
`
const StyledH5 = styled.h5 `
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (max-width: 768px) {
    
  }
`
const StyledP = styled.h5 `
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  max-width: 510px;
  color: #FFFFFF;
  @media (max-width: 768px) {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }


    /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

`
