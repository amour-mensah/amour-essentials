import { ActionButton } from '../../../css';
import { fetchOrder } from '../../../utils/requests';
import { StyledOrderId, Error } from './Steps.styled';

interface OrderIdProps {
  orderId: string;
  setOrderId: any;
  nextStep: any;
  // setError: any;
  orderIdError: string;
  setOrderIdError: any;
  setOrder: any;
  setLoading: any;
}

export default function OrderId({
  orderId,
  setOrderId,
  nextStep,
  orderIdError,
  setOrderIdError,
  setOrder,
  setLoading
}: OrderIdProps) {
  // Authenticate order ID
  const AuthenticateOrderId = async e => {
    e.preventDefault();

    setLoading(true);

    // Validate and authenticate amazon orderId
    const order = await fetchOrder(orderId);

    if (!Array.isArray(order) || !order.length) {
      setOrderIdError('Please enter a valid order ID');
      // setError(true);
      setLoading(false);
      return;
    } else if (order[0].claimed) {
      setOrderIdError('Order ID already claimed');
      // setError(true);
      setLoading(false);
      return;
    } else {
      setOrderIdError('');
      // setError(false);
      setLoading(false);
      setOrder(order[0]);
      await nextStep();
    }
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
