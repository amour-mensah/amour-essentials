import styled from 'styled-components';
import { theme as t } from './theme';

interface IProps {
  variant?: string;
}

export const ActionButton = styled.button<IProps>`
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  ${props => {
    switch (props.variant) {
      case 'white':
        return `
          background-color: ${t.colors.white};
          color: ${t.colors.black};
          border: 1px solid ${t.colors.black};

          &:hover {
            background-color: ${t.colors.black};
            color: ${t.colors.white};
          }
        `;
      case 'secondary':
        return `
          background-color: ${t.colors.primary};
          color: ${t.colors.white};

          &:hover {
            background-color: ${t.colors.grey};
            color: ${t.colors.white};
          }
        `;
      case 'primary':
      default:
        return `
          background-color: ${t.colors.white};
          color: ${t.colors.primary};

          &:hover {
            background-color: ${t.colors.lightGrey};
            color: ${t.colors.white};
          }
        `;
    }
  }};

  @media (max-width: 425px) {
    padding: 1rem 1.8rem;
    font-size: 1rem;
  }
`;
