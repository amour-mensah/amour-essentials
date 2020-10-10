// import * as React from 'react';
import React, { useState } from 'react';
import OrderId from './steps/OrderId';
import Experience from './steps/Experience';
import ShareFeedback from './steps/ShareFeedback';
import ConfirmAddress from './steps/ConfirmAddress';
import Success from './steps/Success';

export default function SurveyForm() {
  const [step, setStep] = React.useState(1);
  const [orderId, setOrderId] = React.useState('');
  const [order, setOrder] = useState({});
  const [experience, setExperience] = React.useState({});
  const [feedback, setFeedback] = React.useState('');
  const [address, setAddress] = React.useState({});

  const [error, setError] = useState(false);

  const nextStep = () => {
    if (error) {
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const finalSubmission = () => {
    // Do final submission here
    alert(JSON.stringify({ orderId, ...experience, feedback, ...address }));
  };

  switch (step) {
    case 1:
      return (
        <OrderId
          orderId={orderId}
          setOrderId={setOrderId}
          nextStep={nextStep}
          setError={setError}
          setOrder={setOrder}
        />
      );
    case 2:
      return (
        <Experience
          experience={experience}
          setExperience={setExperience}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <ShareFeedback
          feedback={feedback}
          setFeedback={setFeedback}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <ConfirmAddress
          address={address}
          setAddress={setAddress}
          nextStep={nextStep}
          prevStep={prevStep}
          finalSubmission={finalSubmission}
        />
      );
    case 5:
      return <Success />;
    default:
      return null;
  }
}
