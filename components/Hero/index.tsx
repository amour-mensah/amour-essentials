import styled from 'styled-components';
import { theme as t, ActionButton } from '../../css';

const StyledHero = styled.section`
  background: url('/pexels-photo-54283.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    background-size: cover;
  }
`;

const StyledHeroCTA = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
  color: ${t.colors.white};

  @media (max-width: 425px) {
    top: 60%;
    width: 15.5rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.8rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 2.5rem;
    font-family: ${t.fonts.secondary};
    font-weight: 300;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 425px) {
      font-size: 1.4rem;
    }
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
