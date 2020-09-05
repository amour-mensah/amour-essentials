import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import ProductCard from '../ProductCard';
import RightArrow from '../../public/right-arrow.svg';

const StyledNewArrival = styled.section`
  background-color: ${t.colors.primary};
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
    color: ${t.colors.white};
    text-transform: uppercase;
    text-align: center;
  }
`;

const StyledCardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
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
    background-color: ${t.colors.white};
  }
`;

export default function NewArrivals() {
  return (
    <StyledNewArrival>
      <h3>New Arrivals</h3>
      <StyledCardSection>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <StyledRightArrow />
      </StyledCardSection>
    </StyledNewArrival>
  );
}
