import { useForm } from 'react-hook-form';
import { ActionButton } from '../../../css';
import { createCustomer, fetchCustomer } from '../../../utils/requests';
import {
  ButtonWrapper,
  Error,
  StyledConfirmAddress,
  StyledFormField
} from './Steps.styled';

interface ConfirmAddressProps {
  address: any;
  setAddress: any;
  nextStep: any;
  prevStep: any;
  customer: any;
  setCustomer: any;
  setLoading: any;
  fieldError: string;
  setFieldError: any;
  finalSubmission: any;
}

interface FormFieldProps {
  name: string;
  text: string;
  value: string;
  handleChange: any;
  required?: boolean;
  type?: string;
  ref: any;
}

export default function ConfirmAddress({
  address,
  setAddress,
  nextStep,
  prevStep,
  customer,
  setCustomer,
  setLoading,
  fieldError,
  setFieldError,
  finalSubmission
}) {
  const { register } = useForm();

  const handleChange = e => {
    const { name, value } = e.target;

    setAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddress = async e => {
    await e.preventDefault();

    setLoading(true);

    // search for customer
    const fetchedCustomer = await fetchCustomer(address.email);

    // check if no customer was found
    if (fetchedCustomer.length === 0) {
      // create customer
      const createdCustomer = await createCustomer(address);

      // check if there was an error when creating customer
      if (
        createdCustomer.error &&
        createdCustomer.message === 'ValidationError'
      ) {
        setFieldError('Please fill all required fields');
        setLoading(false);
        // terminate function if there was an error
        return;
      } else {
        // set the customer to the created result
        setCustomer(createdCustomer);
        await finalSubmission(createdCustomer.id);
      }
    } else {
      // set the customer to the searched result
      setCustomer(fetchedCustomer[0]);
      await finalSubmission(fetchedCustomer[0].id);
    }
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
          text='Name'
          value={address.name}
          handleChange={handleChange}
          required
          ref={register({ required: true })}
        />
        <FormField
          name='address_1'
          text='Address 1'
          value={address.address1}
          handleChange={handleChange}
          required
          ref={register({ required: true })}
        />
        <FormField
          name='address_2'
          text='Address 2'
          value={address.address2}
          handleChange={handleChange}
          ref={register()}
        />
        <FormField
          name='city'
          text='City'
          value={address.city}
          handleChange={handleChange}
          required
          ref={register({ required: true })}
        />
        <FormField
          name='province'
          text='Province/State'
          value={address.province}
          handleChange={handleChange}
          required
          ref={register({ required: true })}
        />
        <FormField
          name='postal_code'
          text='Postal/Zipcode'
          value={address.postalCode}
          handleChange={handleChange}
          required
          ref={register({ required: true })}
        />
        <FormField
          name='email'
          text='Email'
          value={address.email}
          handleChange={handleChange}
          required
          type='email'
          ref={register({ required: true })}
        />
        <Error>{fieldError}</Error>
        {/* <p style={{ textAlign: 'left', fontSize: '12px' }}>* - Required</p> */}
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
  text,
  value,
  handleChange,
  required,
  type,
  ref
}: FormFieldProps) {
  return (
    <StyledFormField>
      <label htmlFor='name'>
        {required ? `${text.toUpperCase()}*` : text.toUpperCase()}
      </label>
      <input
        type={type ? type : 'text'}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
    </StyledFormField>
  );
}
