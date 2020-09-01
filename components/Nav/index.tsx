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
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${t.colors.white};
  opacity: 0.8;

  ul {
    &:first-of-type {
      margin: 0 15rem;
    }

    li {
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 3.5rem;
      }
    }
  }
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 200;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  font-weight: 200;
`;

export default function Nav() {
  return (
    <StyledNav>
      <img src='/AmourEssentials-Logo.png' alt='Amour Essentials Logo' />
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
