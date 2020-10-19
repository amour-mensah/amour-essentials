import { useState } from 'react';
import OrderId from './steps/OrderId';
import Experience from './steps/Experience';
import ShareFeedback from './steps/ShareFeedback';
import ConfirmAddress from './steps/ConfirmAddress';
import Success from './steps/Success';
import { createSurvey } from '../../utils/requests';
import { Loading } from './steps/Steps.styled';

export default function SurveyForm() {
  // refactor state to context api
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState(null);
  const [order, setOrder] = useState(null);
  const [experience, setExperience] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [address, setAddress] = useState({});
  const [customer, setCustomer] = useState({});

  const [loading, setLoading] = useState(false);
  const [orderIdError, setOrderIdError] = useState('');
  const [fieldError, setFieldError] = useState(null);
  // const [error, setError] = useState(false);

  const nextStep = n => {
    // if (error) {
    //   return;
    // }

    setStep(step + n);
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
    const createdSurvey = await createSurvey(survey, order.id);

    setLoading(false);
    nextStep(1);
  };

  if (loading) {
    return <Loading />;
  }

  switch (step) {
    case 1:
      return (
        <OrderId
          orderId={orderId}
          setOrderId={setOrderId}
          nextStep={nextStep}
          // setError={setError}
          orderIdError={orderIdError}
          setOrderIdError={setOrderIdError}
          setOrder={setOrder}
          setLoading={setLoading}
        />
      );
    case 2:
      return (
        <Experience
          experience={experience}
          setExperience={setExperience}
          nextStep={nextStep}
          prevStep={prevStep}
          setLoading={setLoading}
        />
      );
    case 3:
      return (
        <ShareFeedback
          feedback={feedback}
          setFeedback={setFeedback}
          nextStep={nextStep}
          prevStep={prevStep}
          setLoading={setLoading}
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
          setLoading={setLoading}
          fieldError={fieldError}
          setFieldError={setFieldError}
          finalSubmission={finalSubmission}
        />
      );
    case 5:
      return <Success />;
    default:
      return null;
  }
}
