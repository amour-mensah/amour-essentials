import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import { ActionButton } from '../../css/common';

const StyledHero = styled.section`
  background: url('/pexels-photo-54283.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  width: 100%;
  height: 100vh;
`;

const StyledHeroCTA = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
  color: ${t.colors.white};

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2.5rem;
    font-family: ${t.fonts.secondary};
    font-weight: 300;
    margin-bottom: 4rem;
  }
`;

const Italicized = styled.span`
  font-style: italic;
`;

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroCTA>
        <h1>Header Title Gotham Book 70pt</h1>
        <p>
          Description Text Garamond Premier Pro Regular or{' '}
          <Italicized>Italic</Italicized> 45pt
        </p>
        <ActionButton>Action Button</ActionButton>
      </StyledHeroCTA>
    </StyledHero>
  );
}
