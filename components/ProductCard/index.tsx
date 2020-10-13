import styled from 'styled-components';
import { theme as t } from '../../css';

interface ProductCardProps {
  product?: any;
}

interface ProductImageProps {
  image?: string;
}

const StyledProductCard = styled.div`
  padding: 1rem;
  color: ${t.colors.white};
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const StyledProductImage = styled.div<ProductImageProps>`
  width: 18rem;
  height: 22rem;
  margin: 0 auto 2rem auto;
  ${props => {
    // check if image is passed to component
    if (props.image) {
      // check if node environment is production
      if (process.env.NODE_ENV === 'production') {
        return `
          background-image: url("${props.image}");
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
        `;
      } else {
        // return if node environment isn't production
        return `
          background-image: url("${process.env.NEXT_PUBLIC_API_URL}${props.image}?token=${process.env.NEXT_PUBLIC_TOKEN}");
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
        `;
      }
    } else {
      // return if no image passed to props
      return `
        background-color: ${t.colors.grey};
      `;
    }
  }};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 1024px) {
    width: 10rem;
    height: 14rem;
    background-size: cover;
  }

  @media (max-width: 425px) {
    width: 75%;
    height: 18rem;
  }
`;

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <StyledProductCard>
      <StyledProductImage image={product.images[0].formats.small.url} />
      <p>{product.name}</p>
    </StyledProductCard>
  );
}
