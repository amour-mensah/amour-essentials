import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  background: ${t.colors.white};
  opacity: 0.8;

  @media (max-width: 1024px) {
    flex: 0 0 100%;
    padding: 1.6rem 0.8rem;
    justify-content: center;
  }

  ul {
    &:first-of-type {
      margin: 0 8rem;

      @media (max-width: 1024px) {
        margin: 0 2.5rem 0 0;
      }

      @media (max-width: 425px) {
        margin: 0 0 2rem 0;
      }
    }

    li {
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 2.5rem;
      }
    }
  }
`;

const StyledLogoContainer = styled.div`
  img {
    width: 18rem;

    @media (max-width: 320px) {
      width: 15.5rem;
    }
  }

  @media (max-width: 1280px) {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    color: ${t.colors.primary};
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    color: ${t.colors.primary};
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledLogoContainer>
        <Link href='/'>
          <a>
            <img src='/AmourEssentials-Logo.png' alt='Amour Essentials Logo' />
          </a>
        </Link>
      </StyledLogoContainer>
      <ul>
        <li>
          <Link href='/'>
            <StyledLink>Home</StyledLink>
          </Link>
        </li>
        <li>
          <Link href='/shop'>
            <StyledLink>Shop</StyledLink>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <StyledLink>About</StyledLink>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <StyledIcon icon={faSearch} />
        </li>
        <li>
          <StyledIcon icon={faUser} />
        </li>
        <li>
          <StyledIcon icon={faShoppingCart} />
        </li>
      </ul>
    </StyledNav>
  );
}
