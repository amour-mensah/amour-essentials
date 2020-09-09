import styled from 'styled-components';
import Slider from 'react-slick';
import { theme as t } from '../../css/theme';
import ProductCard from '../ProductCard';
import RightArrow from '../../public/right-arrow.svg';

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

// const StyledRightArrow = styled(RightArrow)`
//   background-color: ${t.colors.grey};
//   width: 1.8rem;
//   height: 1.8rem;
//   border-radius: 50%;
//   padding: 0.6rem;
//   margin-left: 2rem;
//   margin-bottom: 6.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: ${t.colors.white};
//   }
// `;

export default function NewArrivals() {
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
        {/* <StyledRightArrow /> */}
      </div>
    </StyledNewArrival>
  );
}
