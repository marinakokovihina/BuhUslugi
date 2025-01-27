import React from 'react';
import {Container} from "../../components/Container/Container";
import styled from "styled-components";
import girl from "../../../src/assets/img/Girly.png"
export const CallPage = () => {
    return (
            <StyledPage id='call'>
                <Container>
                    <StyledH2>Оставьте свои данные и менеджер свяжется с вами!</StyledH2>

                    <FormWrap>
                       <LeftColumn>
                            <StyledImg  src={girl} />
                       </LeftColumn>
                        <RightColumn>
                            <StyledForm>
                                <StyledSelect>
                                    <option disabled={true}>Форма</option>
                                    <option>ООП</option>
                                    <option>ИП</option>
                                </StyledSelect>
                                <StyledInput
                                    id='oborot'
                                    type = 'number'
                                    placeholder='Обоорот в месяц, млн'
                                />
                                <StyledInput
                                    id='kolichestvo'
                                    type = 'number'
                                    placeholder='Количество сотрудников'
                                />
                                <StyledInput
                                    id = 'name'
                                    placeholder='Имя'
                                />
                                <StyledInput
                                    type='number'
                                    id='phoneNumber'
                                    placeholder='+7(___)___-__-__'
                                />
                                <StyledInput
                                    id='mail'
                                    type = 'email'
                                    placeholder='example@ex.ru'
                                />
                                <StyledButton>
                                    Отправить
                                </StyledButton>
                            </StyledForm>

                        </RightColumn>
                    </FormWrap>
                </Container>
            </StyledPage>
    );
};

const StyledPage = styled.div `
  width: 100%;
  padding-bottom: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(48.54deg, rgba(255, 255, 255, 0.54) 14.2%, rgba(207, 242, 227, 0.6) 75.68%), radial-gradient(33.05% 27.23% at 93.62% 91.67%, rgba(229, 149, 174, 0.7) 0%, rgba(231, 184, 204, 0.189) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(70.89% 70.89% at 1.48% 5.78%, #D4E5ED 0%, #FCF8F8 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 60px;
  text-transform: uppercase;
  text-align: center;
  color: #28666F;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-weight: 600;
    //font-family: Lato;
    font-size: 20px;
    line-height: 30px;
    max-width: 100%;
    
  }
`

const StyledInput = styled.input `
  border: none;
  color: #7e7d7d;
  padding: 10px 25px;
  width: 500px;
  height: 60px;
  background: #FFFFFF;
  box-shadow: inset 0px 4px 10.4px rgba(104, 103, 103, 0.25);
  border-radius: 40px;
  outline: none;
  @media (max-width: 768px) {
    width: 300px;
    height: 45px;
  }
`

const StyledSelect = styled.select `
  width: 500px;
  height: 60px;
  border-radius: 40px;
  border: none;
  color: #7e7d7d;
  padding-left:20px;
  padding-right: 30px;
  outline: none;
  box-shadow: inset 0px 4px 10.4px rgba(104, 103, 103, 0.25);
  @media (max-width: 768px) {
    width: 300px;
    height: 45px;
    margin-top: 47px;
  }
`
const StyledForm = styled.form `
  
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 768px) {
    align-items: center;
    gap: 30px;

  }
`

const StyledOption = styled.option `
  color: #B6B5B5;
`

const StyledButton = styled.button `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 490px;
  height: 70px;
  color: white;
  background: #649EA6;
  box-shadow: inset 0px -4px 7.5px rgba(255, 255, 255, 0.12), inset 0px 4px 10.3px rgba(255, 255, 255, 0.25);
  border-radius: 40px;
  border: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: #3B747C;
    transition: 0.2s ease-out;
  }
  font-size: 24px;
  @media (max-width: 768px) {
    width: 300px;
    height: 55px;
    margin-top: 10px;
  }
`
const FormWrap = styled.div `
  margin-top: 70px;
  display: flex;
  width: 850px;
  height: 802px;
  background: linear-gradient(123.98deg, rgba(255, 255, 255, 0.456) 19.77%, rgba(255, 255, 255, 0.66) 39.15%, rgba(255, 255, 255, 0) 58%), rgba(224, 248, 245, 0.44);
  border: 0.5px solid rgba(182, 203, 203, 0.3);
  box-shadow: 0px 3px 18.1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(25px);
  border-radius: 50px;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    background: none;
    border: none;
    //backdrop-filter: none;
    box-shadow: none;
  }
`

const LeftColumn = styled.div `
  margin-top: -40px;
  margin-left: -60px;
  @media (max-width: 768px) {
    margin-left: -35px;
    margin-top: -45px;
    position: absolute;
    z-index: -1;
  }
`
const RightColumn = styled.div `
    margin-top: 77px;
  @media (max-width: 768px) {
    margin-top: 115px;
    margin-left: 1%;
    background: linear-gradient(123.98deg, rgba(255, 255, 255, 0.456) 19.77%, rgba(255, 255, 255, 0.66) 39.15%, rgba(255, 255, 255, 0) 58%), rgba(224, 248, 245, 0.44);
    border: 0.5px solid rgba(182, 203, 203, 0.3);
    box-shadow: 0px 3px 18.1px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(25px);
    border-radius: 30px;
    width: 320px;
    height: 600px;
  }
`
const StyledImg = styled.img `
  width: 253px;
  
  height: 834px;
`
