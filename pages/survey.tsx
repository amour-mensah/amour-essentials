import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SurveyForm from '../components/SurveyForm';

const StyledSurveyForm = styled.div`
  position: relative;
  width: 100%;
  height: 34.5rem;
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
