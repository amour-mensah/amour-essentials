import React from 'react';
import { ActionButton } from '../../../css';
import {
  StyledShareFeedback,
  FeedbackContainer,
  ButtonWrapper
} from './Steps.styled';

interface ShareFeedbackProps {
  feedback: string;
  setFeedback: any;
  nextStep: any;
  prevStep: any;
  setLoading: any;
}

export default function ShareFeedback({
  feedback,
  setFeedback,
  nextStep,
  prevStep,
  setLoading
}) {
  const handleChange = e => {
    setFeedback(e.target.value);
  };

  const submitFeedback = e => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
    nextStep();
  };

  return (
    <StyledShareFeedback>
      <h3>Thanks for your Feedback!</h3>
      <p>IN THE MEANTIME, WOULD YOU LIKE TO SHARE YOUR FEEDBACK TO OTHERS?</p>
      <p>
        ALTHOUGH SHARING YOUR FEEDBACK IS NOT REQUIRED, CUSTOMERS TRULY VALUE
        FEEDBACK WRITTEN BY OTHER CUSTOMERS WHO PURCHASED THE PRODUCT.
      </p>
      <p>
        FURTHERMORE, FEEDBACK LIKE YOURS HELPS SMALL BRANDS CONTINUE TO GROW
        ONLINE AND IS VERY MUCH APPRECIATED.
      </p>
      <form onSubmit={submitFeedback}>
        <FeedbackContainer>
          <textarea
            name='feedback'
            id='feedback'
            value={feedback}
            onChange={handleChange}
          />
          <a href='#'>
            <div>
              <span>Share Feedback on Amazon</span>
              <img src='/amazon-logo-transparent.png' alt='Amazon Logo' />
            </div>
          </a>
        </FeedbackContainer>
        <ButtonWrapper>
          <span onClick={prevStep}>&larr; Prev Step</span>
          <ActionButton variant='white' style={{ marginTop: '100px' }}>
            CONTINUE TO CLAIM DISCOUNT PROMOTION
          </ActionButton>
        </ButtonWrapper>
      </form>
    </StyledShareFeedback>
  );
}
