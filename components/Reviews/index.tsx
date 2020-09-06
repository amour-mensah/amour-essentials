import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import Star from '../../public/star.svg';
import RightArrow from '../../public/right-arrow.svg';

const StyledReviews = styled.section`
  width: 100%;
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
    color: ${t.colors.primary};
    text-transform: uppercase;
    text-align: center;
  }
`;

const StyledReviewContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  width: 30%;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const StyledTextContainer = styled.div`
  margin: 0 3rem;
  width: 30%;

  div {
    margin-bottom: 3rem;
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

const StyledRightArrow = styled(RightArrow)`
  background-color: ${t.colors.grey};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  padding: 0.6rem;
  margin-left: 2rem;
  margin-bottom: 6.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${t.colors.primary};
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
        <StyledRightArrow />
      </StyledReviewContainer>
    </StyledReviews>
  );
}
