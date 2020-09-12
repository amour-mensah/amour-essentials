import styled from 'styled-components';
import { theme as t } from '../../css';

const StyledProductCard = styled.div`
  padding: 1rem;
  color: ${t.colors.white};
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const StyledProductImage = styled.div`
  width: 18rem;
  height: 22rem;
  margin: 0 auto 2rem auto;
  background-color: ${t.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 1024px) {
    width: 10rem;
    height: 14rem;
  }

  @media (max-width: 425px) {
    width: 75%;
    height: 18rem;
  }
`;

export default function ProductCard() {
  return (
    <StyledProductCard>
      <StyledProductImage />
      <p>Product Name</p>
      <p>C$999</p>
    </StyledProductCard>
  );
}
