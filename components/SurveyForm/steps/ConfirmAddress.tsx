import React from 'react';
import { ActionButton } from '../../../css';
import {
  ButtonWrapper,
  StyledConfirmAddress,
  StyledFormField
} from './Steps.styled';

interface ConfirmAddressProps {
  address: any;
  setAddress: any;
  nextStep: any;
  prevStep: any;
  finalSubmission: any;
}

interface FormFieldProps {
  name: string;
  value: string;
  handleChange: any;
  required: boolean;
  type?: string;
}

export default function ConfirmAddress({
  address,
  setAddress,
  nextStep,
  prevStep,
  finalSubmission
}) {
  const handleChange = e => {
    const { name, value } = e.target;

    setAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddress = e => {
    e.preventDefault();
    // Do submissions here
    finalSubmission();
    nextStep();
  };

  return (
    <StyledConfirmAddress>
      <h3>Confirm Your Address</h3>
      <p>
        Please confirm your shipping address to receive a promotional discount
      </p>
      <form onSubmit={submitAddress}>
        <FormField
          name='name'
          value={address.name}
          handleChange={handleChange}
          required
        />
        <FormField
          name='address1'
          value={address.address1}
          handleChange={handleChange}
          required
        />
        <FormField
          name='address2'
          value={address.address2}
          handleChange={handleChange}
        />
        <FormField
          name='city'
          value={address.city}
          handleChange={handleChange}
          required
        />
        <FormField
          name='province'
          value={address.province}
          handleChange={handleChange}
          required
        />
        <FormField
          name='postalCode'
          value={address.postalCode}
          handleChange={handleChange}
          required
        />
        <FormField
          name='email'
          value={address.email}
          handleChange={handleChange}
          required
          type='email'
        />
        <ButtonWrapper>
          <span onClick={prevStep}>&larr; Prev Step</span>
          <ActionButton variant='white' style={{ marginTop: '100px' }}>
            CONFIRM
          </ActionButton>
        </ButtonWrapper>
      </form>
    </StyledConfirmAddress>
  );
}

// form field component
function FormField({
  name,
  value,
  handleChange,
  required,
  type
}: FormFieldProps) {
  return (
    <StyledFormField>
      <label htmlFor='name'>
        {required ? `${name.toUpperCase()}*` : name.toUpperCase()}
      </label>
      <input
        type={type ? type : 'text'}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </StyledFormField>
  );
}
