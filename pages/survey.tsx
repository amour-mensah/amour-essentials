import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SurveyForm from '../components/SurveyForm';

const StyledSurveyForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  min-height: calc(100vh - 21rem);
`;

export default function Survey() {
  return (
    <>
      <header style={{ width: '100%' }}>
        <Nav />
      </header>
      <StyledSurveyForm>
        <SurveyForm />
      </StyledSurveyForm>
      <Footer />
    </>
  );
}
