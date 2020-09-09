import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { theme as t } from '../../css/theme';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 3rem;

  p {
    font-size: 0.8rem;
    font-family: ${t.fonts.secondary};
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 425px) {
    display: block;
    text-align: center;
  }

  h4 {
    text-transform: uppercase;
    font-weight: bold;
  }

  h5 {
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled.a`
  display: block;
  margin: 2rem 0;
  font-size: 0.9rem;
  font-weight: 200;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${t.colors.primary};
  }
`;

const IconLink = styled.a`
  display: inline-block;
  color: inherit;
  font-size: 1.2rem;

  :not(:last-of-type) {
    margin-right: 1.5rem;
  }

  :hover {
    color: ${t.colors.primary};
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLinkContainer>
        <div>
          <h4>Our Company</h4>
          <Link href='/about'>
            <StyledLink>About Us</StyledLink>
          </Link>
          <Link href='/customer-service'>
            <StyledLink>Customer Service</StyledLink>
          </Link>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link href='/faqs'>
            <StyledLink>FAQs</StyledLink>
          </Link>
          <Link href='/reviews'>
            <StyledLink>Reviews</StyledLink>
          </Link>
        </div>
        <div>
          <h5>Follow Us on Social Media</h5>
          <IconLink href='#'>
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
          <IconLink href='#'>
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
        </div>
      </StyledLinkContainer>
      <p>Copyright &#169; {new Date().getFullYear()} Amour Essentials</p>
    </StyledFooter>
  );
}
