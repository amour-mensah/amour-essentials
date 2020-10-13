import styled from 'styled-components';
import { theme as t, ActionButton } from '../../css';

interface BigCouchProps {
  bigCouchContent: any;
}

interface ImageProps {
  image: string;
}

const StyledCouchSection = styled.section`
  width: 100%;
  height: 70vh;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 425px) {
    height: 50vh;
  }
`;

const StyledImageDiv = styled.div<ImageProps>`
  ${props => {
    if (process.env.NODE_ENV === 'production') {
      return `
        background-image: url("${props.image}");
      `;
    } else {
      return `
        background-image: url("${process.env.NEXT_PUBLIC_API_URL}${props.image}?token=${process.env.NEXT_PUBLIC_TOKEN}");
      `;
    }
  }}
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  height: 90%;
  margin: auto;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${t.colors.white};
    width: 80%;

    @media (max-width: 425px) {
      width: 90%;
    }

    h3 {
      font-size: 2.5rem;
      text-transform: capitalize;
      /* letter-spacing: 1.5px; */
      margin-bottom: 3rem;
      line-height: 1.2;

      @media (max-width: 1024px) {
        font-size: 1.6rem;
      }

      @media (max-width: 425px) {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
    }

    p {
      font-size: 2rem;
      font-family: ${t.fonts.secondary};
      margin-bottom: 2rem;

      @media (max-width: 1024px) {
        font-size: 1.4rem;
      }

      @media (max-width: 425px) {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      span {
        font-style: italic;
      }
    }
  }
`;

export default function BigCouch({ bigCouchContent }: BigCouchProps) {
  // destructuring needed data from big couch content
  const {
    heading,
    small_text,
    background_image: { url }
  } = bigCouchContent;

  return (
    <StyledCouchSection>
      <StyledImageDiv image={url}>
        <div>
          <h3>{heading}</h3>
          {small_text && <p>{small_text}</p>}
          <ActionButton>Learn More</ActionButton>
        </div>
      </StyledImageDiv>
    </StyledCouchSection>
  );
}
