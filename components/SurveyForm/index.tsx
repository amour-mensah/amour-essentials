// import * as React from 'react';
import { useState } from 'react';
import OrderId from './steps/OrderId';
import Experience from './steps/Experience';
import ShareFeedback from './steps/ShareFeedback';
import ConfirmAddress from './steps/ConfirmAddress';
import Success from './steps/Success';
import { createSurvey } from '../../utils/requests';

export default function SurveyForm() {
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState(null);
  const [order, setOrder] = useState(null);
  const [experience, setExperience] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [address, setAddress] = useState({});
  const [customer, setCustomer] = useState({});

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

  const finalSubmission = async customerId => {
    const survey = {
      order_id: orderId,
      ...experience,
      feedback,
      order: order.id,
      customer: customerId
    };
    // create a survey entry by passing survey and the order DB id(separate from the orderId from amazon)
    const createdSurvey = createSurvey(survey, order.id)

    if (createdSurvey.statusCode === 500) {
      return;
    } else {
      nextStep();
    }
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
          customer={customer}
          setCustomer={setCustomer}
          finalSubmission={finalSubmission}
        />
      );
    case 5:
      return <Success />;
    default:
      return null;
  }
}
