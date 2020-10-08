import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme as t, ActionButton } from '../../css';

interface IOrder {
  order?: number;
  feature?: number;
}

const StyledFeature = styled.section`
  width: 100%;
  padding: 2.5rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    display: block;
    text-align: center;
  }
`;

const StyledTextContainer = styled.div<IOrder>`
  color: ${t.colors.primary};
  ${props => {
    if (props.order === 2) {
      return `
        margin-left: 1rem;
        order: 2;
      `;
    } else {
      return `
        margin-right: 1rem;
        order: 1;
      `;
    }
  }};

  @media (max-width: 425px) {
    margin: 0 0 2rem 0;
  }

  h2 {
    font-size: 2.8rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    letter-spacing: 1.5px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
  }

  p {
    font-size: 2rem;
    font-family: ${t.fonts.secondary};
    letter-spacing: 1.5px;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    span {
      font-style: italic;
    }
  }
`;

const StyledImageContainer = styled.div<IOrder>`
  width: 80%;
  overflow: hidden;
  ${props => {
    if (props.order === 2) {
      return `
        order: 1;
        margin-right: 1rem;
      `;
    } else {
      return `
        order: 2;
      `;
    }
  }};

  @media (max-width: 425px) {
    margin: auto;
  }

  img {
    width: 100%;
    margin: auto;
    object-fit: contain;
  }
`;

export default function Feature({ order, feature }: IOrder) {
  const [heading, setHeading] = useState('Home Decor');
  const [text, setText] = useState(
    'Get Inspired with Stylish Pieces to Bring Elegance to Your Home'
  );

  useEffect(() => {
    if (feature && feature === 2) {
      setHeading('Kitchen');
      setText('Redefine Your Kitchen Space with Stunning Accessories');
    }
  }, [feature]);

  return (
    <StyledFeature>
      <StyledTextContainer order={order}>
        <h2>{heading}</h2>
        <p>
          <span>{text}</span>
        </p>
        <ActionButton variant='secondary'>Coming Soon</ActionButton>
      </StyledTextContainer>
      <StyledImageContainer order={order}>
        <img
          src={
            feature && feature === 2
              ? '/pexels-terry-magallanes-3623785.jpg'
              : '/pexels-vlada-karpovich-4050318.jpg'
          }
          alt='Feature Image'
        />
      </StyledImageContainer>
    </StyledFeature>
  );
}
