import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container/Container";
import vk from "../../assets/img/VK.png"
import tg from "../../assets/img/Tg.png"
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledWrap>
                    <StyledColumnL>
                        <StyledH5>Email</StyledH5>
                        <StyledEmail>example@exaple.com</StyledEmail>
                        <StyledP>По всем интересующим вопросам можете обратиться к нашим специалистам</StyledP>
                    </StyledColumnL>
                    <StyledColumnR>
                        <Social>
                            <StyledText>Социальные сети</StyledText>
                            <StyledIcons>
                                <StyledImage src={tg}/>
                                <StyledImage src={vk}/>
                            </StyledIcons>
                            <StyledButton onClick={() => window.scrollTo({ top: document.getElementById('call')!.offsetTop, behavior: 'smooth'})}>Заказать звонок</StyledButton>

                        </Social>
                    </StyledColumnR>
                </StyledWrap>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer `
  background: #CFDBDB;
  width: 100%;
  height: 180px;

`
const StyledH5 = styled.h5 `
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
  margin-top: 20px;
  color: #28666F;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }

`
const StyledEmail = styled.p `
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 136%;
  color: #28666F;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }

`
const StyledP = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 136%;
  color: #28666F;
  @media (max-width: 768px) {
    font-size: 10px;
    text-align: left;
  }

`
const StyledColumnL = styled.div `
  display: flex;
  align-items: start;
  flex-direction: column;
`
const StyledColumnR = styled.div `
`
const StyledWrap = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 45px;
  }

`
const Social = styled.div`
    align-items: start;
  display: flex;
  flex-direction: column;
  width: 350px;
`
const StyledText = styled.div`
    margin-top: 20px;
  @media (max-width: 768px) {
font-size: 12px;
  }
`
const StyledIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  

`
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 150px;
  height: 35px;
  margin-top: 20px;

  color: white;
  background: #E4B0C3;
  border: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: #D28AA4;
    transition: 0.2s ease-out;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 35px;
  }
`
const StyledImage = styled.img`
  width: 24px;
  height: 24px;
`
