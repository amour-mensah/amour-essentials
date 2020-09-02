import styled from 'styled-components';
import { theme as t } from './theme';

enum VARIANT {
  PRIMARY,
  SECONDARY
}

interface IProps {
  variant?: VARIANT;
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
      case VARIANT.SECONDARY:
        return `
          background-color: ${t.colors.primary};
          color: ${t.colors.white};

          &:hover {
            background-color: ${t.colors.grey};
            color: ${t.colors.white};
          }
        `;
      case VARIANT.PRIMARY:
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
  }}
`;
