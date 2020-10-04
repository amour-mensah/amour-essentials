import styled from 'styled-components';
import { theme as t } from '../../../css/theme';
import { surveyWrapper, styledRadio } from '../../../css/common';

// Order Id step
export const StyledOrderId = styled.div`
  ${surveyWrapper};

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
  ${surveyWrapper};
`;

// Satisfaction in Product Experience
export const StyledSatisfaction = styled.div`
  margin-bottom: 5rem;
  ${styledRadio};

  label {
    width: 11rem;
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

    &:focus {
      outline: none;
      border: 1px solid ${t.colors.primary};
    }
  }
`;

// Rating in Product Experience
export const StyledRating = styled.div`
  ${styledRadio}
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

    &:hover {
      color: ${t.colors.primary};
    }
  }
`;

// Share Feedback step
export const StyledShareFeedback = styled.div`
  ${surveyWrapper};
`;
