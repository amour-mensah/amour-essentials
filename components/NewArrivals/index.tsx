import styled from 'styled-components';
import Slider from 'react-slick';
import { theme as t } from '../../css';
import ProductCard from '../ProductCard';

interface NewArrivalsProps {
  newArrivals?: any;
}

const StyledNewArrival = styled.section`
  background-color: ${t.colors.primary};
  padding: 3rem 1rem;
  overflow: hidden;

  h3 {
    font-size: 2rem;
    color: ${t.colors.white};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }
`;

export default function NewArrivals({ newArrivals }) {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <StyledNewArrival>
      <h3>New Arrivals</h3>
      <div>
        <Slider {...config}>
          {newArrivals && newArrivals.length ? (
            newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <ProductCard />
          )}
        </Slider>
      </div>
    </StyledNewArrival>
  );
}
