import styled from 'styled-components';
import { theme as t } from '../../../css/theme';

// Order Id step
export const StyledOrderId = styled.div`
  width: 65%;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1rem;
  padding: 2.5rem;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 6rem;
  }

  input {
    background-color: transparent;
    text-indent: 1.5rem;
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
    border: none;
    border-bottom: 1px solid #000000;
    width: 40rem;
    font-size: 1.2rem;
    transition: border ease-in-out 0.2s;

    &:focus {
      outline: none;
      border-bottom: 3px solid ${t.colors.primary};
    }
  }
`;

// Product Experience step
export const StyledExperience = styled.div`
  width: 65%;
  margin: 2rem 0;
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

export const StyledSatisfaction = styled.div`
  margin-bottom: 5rem;

  input {
    display: none;
  }

  label {
    display: inline-block;
    padding: 1rem 2rem;
    width: 11rem;
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

export const StyledExperienceDescription = styled.div`
  margin-bottom: 5rem;

  label {
    font-size: 1rem;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 2rem;
  }

  textarea {
    display: block;
    width: 70%;
    height: 10rem;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1.2rem;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid transparent;
    border-radius: 1rem;
    transition: border ease-in-out 0.2s;

    &:focus {
      outline: none;
      border: 1px solid ${t.colors.primary};
    }
  }
`;

export const StyledRating = styled.div`
  input {
    display: none;
  }

  label {
    display: inline-block;
    padding: 1rem 2rem;
    /* width: 11rem; */
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

export const ButtonWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 128px;
    left: 0;
    color: ${t.colors.black};
    cursor: pointer;

    &:hover {
      color: ${t.colors.primary};
    }
  }
`;
