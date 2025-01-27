import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container/Container";
import {ServiceCard} from "./ServiceCard/ServiceCard";
import first from "../../assets/img/Services/11.png"
import second from "../../assets/img/Services/12.png"
import third from "../../assets/img/Services/13.png"
import fourth from "../../assets/img/Services/21.png"
import fifth from "../../assets/img/Services/22.png"
import sixth from "../../assets/img/Services/23.png"
import seventh from "../../assets/img/Services/31.png"
import eight from "../../assets/img/Services/32.png"
import ninth from "../../assets/img/Services/33.png"
export const Services = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <StyledServices id="services">
            <Container>
                <StyledWrap>
                    <StyledH2>Услуги</StyledH2>
                    <WrapForCard>
                    <StyledColumn1>
                    <ServiceCard
                        image={first}
                        width={isMobile ? '119px' : '200px'}
                        height={isMobile ? '114px' : '185px'}
                        top = {isMobile ? '10%' : '-21%'}
                        left={isMobile ? '-2%' : '0'}
                        wCard={isMobile ? '325px' : '400px'}
                        hCard="175px"
                        maxWidth={isMobile ? '205px' : '290px'}
                        h2="Ведение налогового учета"
                        h3="Подготовка и сдача всей необходимой отчетности в госорганы"
                    />
                    <ServiceCard
                        image={second}
                        top="-16%"
                        left={isMobile ? '-5%' : "-14%"}
                        width={isMobile ? '120px' : '200px'}
                        height="194px"
                        maxWidth={isMobile ? '205px' : '290px'}
                        wCard={isMobile ? '325px' : '400px'}
                        hCard="155px"
                        h2="Бухгалтерское сопровождение"
                        h3="Полный перечень бухгалтерских услуг"
                    />
                    <ServiceCard
                        image={third}
                        width={isMobile ? '130px' : '200px'}
                        top={isMobile ? '-2%' : '-14%'}
                        left={isMobile ? '1%' : '-6%'}
                        height={isMobile ? '110px' : '154px'}
                        wCard={isMobile ? '325px' : '400px'}
                        hCard="270px"
                        maxWidth={isMobile ? '225px' : '290px'}
                        h2="Подготовка документов"
                        h3="Для получения кредита,  лицензирования, регистрации маркировки. Оформление онлайн касс и эквайринга с консультацией по выбору более выгодного, при банкротстве компании, для регистрации компании, для взыскания ДЗ"
                    />
                    </StyledColumn1>
                    <StyledColumn2>
                    <ServiceCard
                        image={fourth}
                        width={isMobile ? '130px' : '200px'}
                        height={isMobile ? '130px' : '165px'}
                        wCard={isMobile ? '325px' : '400px'}
                        hCard={isMobile ? '160px' : '130px'}
                        maxWidth={isMobile ? '225px' : '290px'}
                        left={isMobile ? '-4%' : '-15%'}
                        top={isMobile ? '5%' : '-35%'}
                        h2="Бухгалтерский аудит"
                        h3="Проверка правильности ведения учета, выявление слабых мест"
                    /> <ServiceCard
                        image={fifth}
                        width={isMobile ? '130px' : '180px'}
                        height="160px"
                        wCard={isMobile ? '325px' : '400px'}
                        maxWidth={isMobile ? '235px' : '290px'}
                        hCard="215px"
                        top={isMobile ? '-25%' : '-30%'}
                        left={isMobile ? '-5%' : '-18%'}
                        h2="Финансовый анализ показателей"
                        h3="Отчеты фин анализа по ДЗ и КЗ, по ДДС, по продажам, по затратам, доходам и расходам, по материалам , по прибыли, по марже, по экономии материалов"
                    />
                        <ServiceCard
                            image={sixth}
                            width="100px"
                            height="107px"
                            wCard={isMobile ? '325px' : '400px'}
                            hCard="175px"
                            top = {isMobile ? '5%' : '-20%'}
                            maxWidth={isMobile ? '220px' : '320px'}
                            left = {isMobile ? '1%' : '-5%'}
                            h2="Бухгалтерский аутсорсинг"
                            h3="Полное обслуживание на высоком уровне, бухгалтерское сопровождение удаленно"
                        />
                    </StyledColumn2>
                    <StyledColumn3>
                        <ServiceCard
                            image={seventh}
                            width={isMobile ? '100px' : '180px'}
                            height="186px"
                            wCard={isMobile ? '325px' : '400px'}
                            maxWidth={isMobile ? '220px' : '320px'}
                            hCard="115px"
                            top = {isMobile ? '-40%' : '-65%'}
                            left = {isMobile ? '1%' : '-10%'}
                            h2="Нулевая отчётность"
                            h3="Сдача нулевой отчетности"
                        />
                        <ServiceCard
                            image={eight}
                            width={isMobile ? '110px' : '180px'}
                            top = {isMobile ? '-10%' : '-17%'}
                            left = {isMobile ? '-7%' : '-11%'}
                            height="153px"
                            wCard={isMobile ? '325px' : '400px'}
                            hCard="300px"
                            maxWidth={isMobile ? '250px' : '289px'}
                            h2="Консультирование"
                            h3="Консультации по выбору налогового режима и формы собственности при открытии компании, по приему безналичных платежей, по выбору кредитных организаций и условий, по регистрации маркировки, по установке онлайн касс, по созданию группы компаний"
                        />
                        <ServiceCard
                            top = {isMobile ? '-20%' : '-34%'}
                            left = {isMobile ? '1%' : '-12%'}
                            image={ninth}
                            width={isMobile ? '90px' : '150px'}
                            maxWidth={isMobile ? '200px' : '290px'}
                            height="165px"
                            wCard={isMobile ? '325px' : '400px'}
                            hCard="130px"
                            h2="Восстановление учёта"
                            h3="Восстановление бухгалтерского и налогового учета"
                        />
                    </StyledColumn3>
                </WrapForCard>
                </StyledWrap>
            </Container>
        </StyledServices>
    );
};
const WrapForCard = styled.div `
    display: flex;
    gap: 35px;
    margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

  }
`
const StyledServices = styled.div`
  background: linear-gradient(258.91deg, rgba(255, 255, 255, 0.054) 71.92%, rgba(255, 255, 255, 0.3) 81.52%),
  linear-gradient(62.14deg, rgba(255, 255, 255, 0.27) 16.83%, rgba(196, 221, 210, 0.3) 86.02%),
  #EBEFED;
  padding-bottom: 166px;

  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: scaleX(-1);
    z-index: -1; 
  }
`;
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  text-transform: uppercase;
  color: #28666F;
  flex: none;
  margin-top: 65px;
  order: 0;
  flex-grow: 0;
  z-index: 0;
  @media (max-width: 768px) {
    font-size: 32px;

  }

`
const StyledColumn1 = styled.div `
  display: flex;
  flex-direction: column;
  gap: 55px;
  @media (max-width: 768px) {
    align-items: center;
    gap: 45px;
  }
  
`
const StyledColumn2 = styled.div `
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-top: 120px;
  @media (max-width: 768px) {
    align-items: center;
    gap: 45px;
    margin-top: 45px;

  }
`
const StyledColumn3 = styled.div `
  display: flex;
  flex-direction: column;
  gap: 55px;
  @media (max-width: 768px) {
    align-items: center;
    gap: 45px;
    margin-top: 45px;
  }
`
const StyledWrap = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`
