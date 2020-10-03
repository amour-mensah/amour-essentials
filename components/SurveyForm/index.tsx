import React, { useState } from 'react';
import OrderId from './steps/OrderId';
import Experience from './steps/Experience';
import ShareFeedback from './steps/ShareFeedback';
import ConfirmAddress from './steps/ConfirmAddress';
import Success from './steps/Success';

export default function SurveyForm() {
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState('');

  // Authenticate order ID
  const AuthenticateOrderId = () => {
    // Validate orderId
    // Handle real authentication in here
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <OrderId orderId={orderId} setOrderId={setOrderId} />;
    case 2:
      return <Experience />;
    case 3:
      return <ShareFeedback />;
    case 4:
      return <ConfirmAddress />;
    case 5:
      return <Success />;
    default:
      return null;
  }
}
