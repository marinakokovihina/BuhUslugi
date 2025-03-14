import styled from "styled-components";

type StyledWrapperTypes = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
export const StyledWrapper = styled.div <StyledWrapperTypes>`
  display: flex;
  
  //position: relative;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  -webkit-flex-wrap: ${props => props.wrap || "nowrap"};
  

  @media (min-width: 768px) and (max-width: 1024px) {
    width: max-content;
    max-width: 766px;
    margin-left: 0;

  }
  @media (max-width: 374px) {
    width: 100%;
    align-items: center;
    margin-left: 5%;
  }
    @media (min-width: 375px) and (max-width: 767px){
    //width: auto;
    //  margin-left: 0;
    //  width: fit-content;

    }
  @media (min-width: 1024px) and (max-width: 1440px){
    min-width: 1024px;  }
  @media (min-width: 100px) {
  overflow-x: hidden;
  }
  
`
