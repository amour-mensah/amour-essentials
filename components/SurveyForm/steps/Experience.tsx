import React from 'react';
import { ActionButton } from '../../../css';
import {
  StyledExperience,
  StyledSatisfaction,
  StyledExperienceDescription,
  StyledRating,
  ButtonWrapper
} from './Steps.styled';

interface ExperienceProps {
  experience: any;
  setExperience: any;
  nextStep: any;
  prevStep: any;
}

export default function Experience({
  experience,
  setExperience,
  nextStep,
  prevStep
}: ExperienceProps) {
  const handleChange = e => {
    const { name, value } = e.target;

    // make sure rating value is a number rather than a string
    if (name === 'rating') {
      setExperience(prevState => ({ ...prevState, rating: parseInt(value) }));
    } else {
      setExperience(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const submitExperience = e => {
    e.preventDefault();
    nextStep();
  };

  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return (
    <StyledExperience>
      <h2>What is your experience with our products?</h2>
      <p>
        Please answer the following questions. Your feedback is very valuable to
        us.
      </p>
      <form onSubmit={submitExperience}>
        <StyledSatisfaction>
          <h3>How satisfied are you with your product?</h3>

          <input
            type='radio'
            name='satisfaction'
            id='i-love-it'
            value='i love it'
            onChange={handleChange}
          />
          <label htmlFor='i-love-it'>I Love It</label>

          <input
            type='radio'
            name='satisfaction'
            id='i-like-it'
            value='i like it'
            onChange={handleChange}
          />
          <label htmlFor='i-like-it'>I Like It</label>

          <input
            type='radio'
            name='satisfaction'
            id='its-okay'
            value='its okay'
            onChange={handleChange}
          />
          <label htmlFor='its-okay'>Its Okay</label>

          <input
            type='radio'
            name='satisfaction'
            id='dont-like-it'
            value="don't like it"
            onChange={handleChange}
          />
          <label htmlFor='dont-like-it'>Don't Like It</label>

          <input
            type='radio'
            name='satisfaction'
            id='i-hate-it'
            value='i hate it'
            onChange={handleChange}
          />
          <label htmlFor='i-hate-it'>I Hate It</label>
        </StyledSatisfaction>
        <StyledExperienceDescription>
          <h3>Describe your experience with our products</h3>
          <label htmlFor='experience'>
            What did you like the most about the product? Were there any things
            you disliked?
          </label>
          <textarea
            name='experience'
            id='experience'
            value={experience.experience}
            onChange={handleChange}
          />
        </StyledExperienceDescription>
        <StyledRating>
          <h3>How likely are you to buy this product again?</h3>

          {ratings.map(rating => (
            <React.Fragment key={rating}>
              <input
                type='radio'
                name='rating'
                id={rating}
                value={rating}
                onChange={handleChange}
              />
              <label htmlFor={rating}>{rating}</label>
            </React.Fragment>
          ))}
        </StyledRating>
        <ButtonWrapper>
          <span onClick={prevStep}>&larr; Prev Step</span>
          <ActionButton variant='white' style={{ marginTop: '100px' }}>
            SUBMIT MY EXPERIENCE
          </ActionButton>
        </ButtonWrapper>
      </form>
    </StyledExperience>
  );
}
