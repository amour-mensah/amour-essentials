import styled, { css } from 'styled-components';
import { theme as t } from './theme';

interface IProps {
  variant?: string;
}

export const ActionButton = styled.button<IProps>`
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  ${props => {
    switch (props.variant) {
      case 'white':
        return `
          background-color: ${t.colors.white};
          color: ${t.colors.black};
          border: 1px solid ${t.colors.black};

          &:hover {
            background-color: ${t.colors.black};
            color: ${t.colors.white};
          }
        `;
      case 'secondary':
        return `
          background-color: ${t.colors.primary};
          color: ${t.colors.white};

          &:hover {
            background-color: ${t.colors.grey};
            color: ${t.colors.white};
          }
        `;
      case 'primary':
      default:
        return `
          background-color: ${t.colors.white};
          color: ${t.colors.primary};

          &:hover {
            background-color: ${t.colors.lightGrey};
            color: ${t.colors.white};
          }
        `;
    }
  }};

  @media (max-width: 425px) {
    padding: 1rem 1.8rem;
    font-size: 1rem;
  }
`;

export const surveyWrapper = css`
  width: 65%;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1rem;
  padding: 2.5rem;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 4rem;
    font-family: ${t.fonts.secondary};
  }
`;

export const styledRadio = css`
  input {
    display: none;
  }

  label {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: ${t.colors.primary};
    color: ${t.colors.white};
    transition: all ease-in-out 0.2s;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &:hover {
      background-color: ${t.colors.grey};
      color: ${t.colors.white};
    }
  }

  input[type='radio']:checked + label {
    background-color: ${t.colors.grey};
    color: ${t.colors.white};
  }
`;
