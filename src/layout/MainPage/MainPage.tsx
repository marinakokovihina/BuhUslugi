import React from 'react';
import styled from "styled-components";
import diagram from "../../assets/img/Diagram.png"
import {Container} from "../../components/Container/Container";
export const MainPage = () => {
    return (
        <Container>
            <StyledMain>
                <LeftWrap>
                    <StyledH1>Бухгалтерские услуги</StyledH1>
                    <StyledH2>11 лет успешной работы в своей сфере</StyledH2>
                    <StyledButton onClick={() => window.scrollTo({ top: document.getElementById('call')!.offsetTop, behavior: 'smooth'})}>Заказать звонок</StyledButton>
                </LeftWrap>
                <RightWrap>
                    <StyledImg src = {diagram}/>
                </RightWrap>
            </StyledMain>

        </Container>
    );
};
const StyledImg = styled.img `
  max-width: 628px;
  max-height: 756px;
  
 
`
const StyledMain = styled.main `
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  margin-top: 140px;
`

const LeftWrap = styled.div `
  max-width: 710px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  transform: translateX(33%);
  margin-top: -235px;
  @media (max-width: 768px) {
    transform: translateX(100%);
    max-width: 370px;
    margin-top: -150px;

  }
`
const RightWrap = styled.div `
  position: relative;
  z-index: 0;
  transform: translateX(-18%);
  @media (max-width: 768px) {
    transform: translateX(-8%);

  }
`
const StyledH1 = styled.h1 `
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  text-align: left;
  line-height: 117.6%;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #28666F;
  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: 1px;

  }
`

const StyledH2 = styled.h2 `
  font-style: normal;
  text-align: left;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #28666F;
  margin-top: 24px;
  @media (max-width: 768px) {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #28666F;
    margin-top: 14px;

  }
`
const StyledButton = styled.button `
  display: flex;
  margin-top: 67px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 280px;
  height: 70px;
  background: #53A5B0;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 400;
  margin-left: 0;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: #3B747C;
    transition: 0.2s ease-out;
  }
  @media (max-width: 768px) {
    width: 270px;
    margin-top: 30px;
    height: 70px;
  }
`
