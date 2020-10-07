import styled from 'styled-components';
import { theme as t } from '../../../css/theme';
import { surveyWrapper, styledRadio } from '../../../css/common';

// Order Id step
export const StyledOrderId = styled.div`
  ${surveyWrapper};

  form {
    width: 100%;
  }

  h2 {
    margin-bottom: 6rem;
  }

  input {
    background-color: transparent;
    text-indent: 1.5rem;
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
    border: none;
    border-bottom: 1px solid #000000;
    width: 60%;
    font-size: 1.2rem;
    transition: border ease-in-out 0.2s;

    @media (max-width: 1024px) {
      margin: 0 auto 2rem auto;
    }

    @media (max-width: 425px) {
      text-indent: 0;
    }

    &:focus {
      outline: none;
      border-bottom: 3px solid ${t.colors.primary};
    }
  }
`;

// Product Experience step
export const StyledExperience = styled.div`
  ${surveyWrapper};
`;

// Satisfaction in Product Experience
export const StyledSatisfaction = styled.div`
  margin-bottom: 5rem;

  ${styledRadio};

  label {
    width: 11rem;
    padding: 1rem 2rem;

    @media (max-width: 1440px) {
      padding: 1rem 1.5rem;
    }

    @media (max-width: 1024px) {
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-top: 0.5rem;
      }
    }

    @media (max-width: 425px) {
      margin-top: 0.5rem;
      padding: 0.8rem 0.8rem;
    }

    @media (max-width: 425px) {
      &:not(:last-of-type) {
        margin-right: 0;
      }
    }
  }
`;

// Description in Product Experience
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

    @media (max-width: 768px) {
      width: 90%;
    }

    &:focus {
      outline: none;
      border: 1px solid ${t.colors.primary};
    }
  }
`;

// Rating in Product Experience
export const StyledRating = styled.div`
  ${styledRadio}

  label {
    @media (max-width: 1024px) {
      width: 3rem;
      padding: 0.8rem;
    }

    @media (max-width: 768px) {
      width: 2rem;
      padding: 0.8rem 0.5rem;

      &:not(:last-of-type) {
        margin-right: 0.1rem;
      }
    }
  }
`;

// Buttons for submission
export const ButtonWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 128px;
    left: 0;
    color: ${t.colors.black};
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      position: static;
      margin-top: 45px;
    }

    &:hover {
      color: ${t.colors.primary};
    }
  }
`;

// Share Feedback step
export const StyledShareFeedback = styled.div`
  ${surveyWrapper};

  p {
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  form {
    margin-top: 6rem;
  }
`;

// Feedback container feedback step
export const FeedbackContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6rem;
  justify-items: center;
  align-items: center;

  textarea {
    display: block;
    width: 100%;
    height: 10rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid transparent;
    transition: border ease-in-out 0.2s;

    &:focus {
      outline: none;
      border: 1px solid ${t.colors.primary};
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    padding: 1rem;
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid transparent;
    border-radius: 1rem;
    background-color: ${t.colors.lightGrey};
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: ${t.colors.grey};
    }

    span {
      display: block;
      padding: 1rem 0.6rem;
      background-color: ${t.colors.amazonOrange};
      color: ${t.colors.white};
    }
  }

  img {
    width: 70%;
    margin-top: 1.5rem;
  }
`;

// Confirm Address step
export const StyledConfirmAddress = styled.div`
  ${surveyWrapper};

  form {
    width: 100%;
  }
`;

// Form field
export const StyledFormField = styled.div`
  width: 80%;
  margin: 0.8rem auto;
  display: grid;
  align-items: center;
  grid-template-columns: 120px 1fr;
  grid-column-gap: 2.5rem;

  label {
    text-align: right;
  }

  input {
    border: none;
    border: 1px solid transparent;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 0.8em;
    padding: 1rem;

    &:focus {
      outline: none;
      border: 1px solid ${t.colors.primary};
    }
  }
`;

// Success step
export const StyledSuccess = styled.div`
  ${surveyWrapper}

  p {
    line-height: 2;
  }
`;
