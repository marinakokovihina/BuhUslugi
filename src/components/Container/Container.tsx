import styled from "styled-components";

//1120 + 15 px
export const Container = styled.div `
  max-width: 1350px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  //background-color: white;
  @media (max-width: 768px) {
    max-width: 425px;

  }
`
