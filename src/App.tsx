import React from 'react';
import {StyledWrapper} from "./layout/Wrapper/StyledWrapper";
import {Header} from "./layout/Header/Header";
import {MainPage} from "./layout/MainPage/MainPage";
import {CallPage} from "./layout/CallPage/CallPage";
import {Services} from "./layout/Services/Services";
import {Consultations} from "./layout/Consultations/Consultations";
import {AboutCompany} from "./layout/AboutCompany/AboutCompany";
import {Footer} from "./layout/Footer/Footer";

function App() {
  return (
      <StyledWrapper align={'center'} justify={"center"} direction={"column"}>
            <Header/>
            <MainPage/>
            <CallPage/>
            <Services/>
            <Consultations/>
            <AboutCompany/>
            <Footer/>
      </StyledWrapper>
  );
}

export default App;
