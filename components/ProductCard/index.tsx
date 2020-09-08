import styled from 'styled-components';
import { theme as t } from '../../css/theme';

const StyledProductCard = styled.div`
  padding: 1rem;
  color: ${t.colors.white};
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const StyledProductImage = styled.div`
  width: 12rem;
  height: 18rem;
  margin: 0 1.5rem 2rem 1.5rem;
  background-color: ${t.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
