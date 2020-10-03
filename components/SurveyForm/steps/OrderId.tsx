import React from 'react';
import styled from 'styled-components';
import { theme as t } from '../../../css/theme';
import { ActionButton } from '../../../css';

const StyledOrderId = styled.div`
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1rem;
  padding: 2.5rem;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 6rem;
  }

  input {
    background-color: transparent;
    text-indent: 1.5rem;
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
    border: none;
    border-bottom: 1px solid #000000;
    width: 40rem;
    font-size: 1.2rem;
    transition: border ease-in-out 0.2s;

    &:focus {
      outline: none;
      border-bottom: 3px solid ${t.colors.primary};
    }
  }
`;

export default function OrderId() {
  return (
    <StyledOrderId>
      <h2>Enter Order ID Below</h2>
      <form>
        <input type='text' name='orderId' id='orderId' />
        <ActionButton variant='secondary'>Authenticate</ActionButton>
      </form>
    </StyledOrderId>
  );
}
