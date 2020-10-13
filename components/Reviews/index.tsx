import styled from 'styled-components';
import { theme as t } from '../../css';
import Star from '../../public/star.svg';

const StyledReviews = styled.section`
  width: 100%;
  padding: 3rem 0;

  h3 {
    font-size: 2rem;
    color: ${t.colors.primary};
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }
`;

const StyledReviewContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    display: block;
  }
`;

const StyledImageContainer = styled.div`
  width: 30%;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const StyledTextContainer = styled.div`
  margin: 0 3rem;
  width: 30%;

  @media (max-width: 425px) {
    width: 100%;
    margin: 0;
    padding: 0 2rem;
  }

  div {
    margin-bottom: 3rem;

    @media (max-width: 425px) {
      text-align: center;
    }
  }

  p {
    font-family: ${t.fonts.secondary};
    font-size: 1.2rem;
    line-height: 1.2;

    :not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
`;

const StyledStar = styled(Star)`
  width: 1.2rem;
  height: 1.2rem;

  :not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export default function Reviews() {
  return (
    <StyledReviews>
      <h3>Customer Reviews</h3>
      <StyledReviewContainer>
        <StyledImageContainer>
          <img src='/pexels-burst-545012.jpg' alt='bedroom' />
        </StyledImageContainer>
        <StyledTextContainer>
          <div>
            <StyledStar />
            <StyledStar />
            <StyledStar />
            <StyledStar />
            <StyledStar />
          </div>
          <p>
            "I'm obsessed, will definitely be buying more of these. Easy to
            order and delivered in timeframe as communicated"
          </p>
          <p>- Alice Johnson from Toronto, ON</p>
        </StyledTextContainer>
      </StyledReviewContainer>
    </StyledReviews>
  );
}
