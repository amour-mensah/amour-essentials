import * as React from 'react';
import { useState } from 'react';
import OrderId from './steps/OrderId';
import Experience from './steps/Experience';
import ShareFeedback from './steps/ShareFeedback';
import ConfirmAddress from './steps/ConfirmAddress';
import Success from './steps/Success';

export default function SurveyForm() {
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState('');
  const [experience, setExperience] = useState({});
  const [feedback, setFeedback] = useState('');
  const [address, setAddress] = useState({});

  const nextStep = () => {
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
