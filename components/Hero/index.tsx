import styled from 'styled-components';
import { theme as t, ActionButton } from '../../css';

interface HeroProps {
  heroContent: any;
}

interface HeroImage {
  image: string;
}

const StyledHero = styled.section<HeroImage>`
  ${props => {
    if (process.env.NODE_ENV === 'production') {
      return `
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("${props.image}");
      `;
    } else {
      return `
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("${process.env.NEXT_PUBLIC_API_URL}${props.image}?token=${process.env.NEXT_PUBLIC_TOKEN}");
        background-blend-mode: multiply;
      `;
    }
  }};
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
  width: 80%;
  color: ${t.colors.white};

  @media (max-width: 375px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 425px) {
    top: 60%;
    width: 90%;
  }

  @media (max-height: 570px) {
    top: 65%;
  }

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    margin-bottom: 3rem;
    line-height: 1.2;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.8rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }

    @media (max-height: 520px) {
      margin-bottom: 1rem;
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

    @media (max-height: 570px) {
      margin-bottom: 1rem;
    }
  }
`;

const Italicized = styled.span`
  font-style: italic;
`;

export default function Hero({ heroContent }: HeroProps) {
  // destructuring required data from hero content
  const {
    heading,
    small_text,
    background_image: { url }
  } = heroContent;

  return (
    <StyledHero image={url}>
      <StyledHeroCTA>
        <h1>{heading}</h1>
        {small_text && <p>{small_text}</p>}
        <ActionButton>Learn More</ActionButton>
      </StyledHeroCTA>
    </StyledHero>
  );
}
