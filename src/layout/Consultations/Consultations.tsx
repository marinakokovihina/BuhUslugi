import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container/Container";
import Diagram from "../../assets/img/palka.png"
export const Consultations = () => {
    return (
        <StyledCons>
            <Container>
                    <StyledH2>Как получить консультацию?</StyledH2>
                <StyledMainWrap>
                    <StyledWrap>
                        <StyledNumber>
                            01
                        </StyledNumber>
                        <StyledTextWrap>
                            <StyledH4>Наш специалист свяжется с вами</StyledH4>
                            <StyledH5>Обсудим формат работы, проконсультируем по бухгалтерским вопросам, определимся со стоимостью</StyledH5>
                        </StyledTextWrap>
                        <StyledNumber>
                            03
                        </StyledNumber>
                    </StyledWrap>
                    <StyledWrap>
                        <StyledImg  src = {Diagram}/>
                    </StyledWrap>
                    <StyledWrap>
                        <StyledTextWrap>
                            <StyledH4>Оставьте заявку</StyledH4>
                            <StyledH5>Укажите свои контактные данные и сведения о компании</StyledH5>
                        </StyledTextWrap>
                        <StyledNumber>
                            02
                        </StyledNumber>
                        <StyledTextWrap>
                            <StyledH4>Готово</StyledH4>
                            <StyledH5>Назначим бухгалтера и бизнес ассистента, выпустим ЭЦП</StyledH5>
                        </StyledTextWrap>
                    </StyledWrap>
                </StyledMainWrap>
            </Container>
        </StyledCons>
    );
};

const StyledCons = styled.div `
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background: #44625A;

`
const StyledMainWrap = styled.div `
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }

`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  margin-bottom: 50px;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 117.6%;
    text-align: center;
    letter-spacing: 0.18px;
    text-transform: uppercase;

    color: #FFFFFF;


  }
`
const StyledNumber = styled.div `
  font-family: Helvetica;
  font-style: normal;
  font-weight: 500;
  font-size: 120px;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  text-transform: capitalize;

  color: #FFFFFF;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 500;
    font-size: 90px;
    line-height: 117.6%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.18px;
    text-transform: uppercase;
  }

`
const StyledTextWrap = styled.div `
  color: #FFFFFF;
  @media (max-width: 768px) {
    width: 150px;
    
  }
`

const StyledH4 = styled.h4 `
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 10px;

  line-height: 117.6%;
  text-align: center;
  letter-spacing: 0.18px;
  text-transform: uppercase;
  max-width: 407px;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 117.6%;
    text-align: center;
    letter-spacing: 0.18px;
    text-transform: uppercase;
  }
`

const StyledH5 = styled.h5 `
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  max-width: 491px;
  line-height: 117.6%;
  text-align: center;
  letter-spacing: 0.18px;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 117.6%;
    text-align: center;
    letter-spacing: 0.18px;
    text-transform: capitalize;
  }

`
const StyledWrap = styled.div `
  display: flex;
  gap: 165px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    display: flex;
    gap: 30px;
    max-width: 110px;
    flex-direction: column;
    
  }
`
const StyledImg = styled.img `
  width: 940px;
  height: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    transform: rotate(90deg);
    transform-origin: center;
    margin: 0; 
    //max-width: 100%;
    //max-height: 100%;
    width: 400px;
    height: 21px;
    
  }


`
