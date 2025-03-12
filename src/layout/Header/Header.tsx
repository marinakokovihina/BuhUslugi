import React from 'react';
import styled from "styled-components";
import {StyledMenu} from "./StyledMenu";
import {Container} from "../../components/Container/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledMenu/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 100;
  top: 0;
  background: rgba(177, 200, 198, 0.76);
  @media (max-width: 768px) {
    //max-width:390px ;
    left: 0;
  }
`
