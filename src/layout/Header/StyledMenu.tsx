import React from 'react';
import styled from "styled-components";

export const StyledMenu = () => {
    return (
        <StyledUl>
            <StyledLi><StyledA href="#services">Услуги</StyledA> </StyledLi>
            <StyledLi><StyledA href="#about"> О компании</StyledA></StyledLi>
        </StyledUl>
    );
};

const StyledUl = styled.ul `
  text-decoration: none;
  display: flex;
  color: white;
  justify-content: flex-end;
  margin-right: 15%;
  margin-top: 11px;
  gap: 90px;
  @media (max-width: 768px) {
    margin-top: 28px;
    margin-right: 3%;
    gap: 40px;

  }
`
const StyledLi = styled.li `
    font-size: 26px;
  @media (max-width: 768px) {
    font-size: 16px;
  }

`
const StyledA = styled.a `
  text-decoration: none;
  color: inherit;
`
