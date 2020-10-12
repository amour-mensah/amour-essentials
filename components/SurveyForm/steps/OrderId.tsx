import { useState } from 'react';
import { ActionButton } from '../../../css';
import { fetchOrder } from '../../../utils/requests';
import { StyledOrderId, Error } from './Steps.styled';

interface OrderIdProps {
  orderId: string;
  setOrderId: any;
  nextStep: any;
  setError: any;
  setOrder: any;
}

export default function OrderId({
  orderId,
  setOrderId,
  nextStep,
  setError,
  setOrder
}: OrderIdProps) {
  const [orderIdError, setOrderIdError] = useState('');

  // Authenticate order ID
  const AuthenticateOrderId = async e => {
    e.preventDefault();
    // Validate and authenticate amazon orderId
    const order = await fetchOrder(orderId);

    if (order === 'Order ID not found') {
      setError(true);
      setOrderIdError('Please enter a valid order ID');
      return;
    }

    if (order.claimed) {
      setError(true);
      setOrderIdError('Order ID already claimed');
      return;
    }

    setError(false);
    setOrderIdError('');
    setOrder(order[0]);
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
        <Error>{orderIdError ? orderIdError : null}</Error>
      </form>
    </StyledOrderId>
  );
}
