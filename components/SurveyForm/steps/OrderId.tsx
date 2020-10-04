import React from 'react';
import { ActionButton } from '../../../css';
import { StyledOrderId } from './Steps.styled';

interface OrderIdProps {
  orderId: String;
  setOrderId: any;
  nextStep: any;
}

export default function OrderId({
  orderId,
  setOrderId,
  nextStep
}: OrderIdProps) {
  // Authenticate order ID
  const AuthenticateOrderId = e => {
    e.preventDefault();
    // Validate orderId
    // Handle real authentication in here
    nextStep();
  };

  return (
    <StyledOrderId>
      <h2>Enter Order ID Below</h2>
      <form onSubmit={AuthenticateOrderId}>
        <input
          type='text'
          name='orderId'
          id='orderId'
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
        />
        <ActionButton variant='secondary'>Authenticate</ActionButton>
      </form>
    </StyledOrderId>
  );
}
