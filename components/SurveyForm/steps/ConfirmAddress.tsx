import { ActionButton } from '../../../css';
import { createCustomer, fetchCustomer } from '../../../utils/requests';
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
  customer: any;
  setCustomer: any;
  finalSubmission: any;
}

interface FormFieldProps {
  name: string;
  value: string;
  handleChange: any;
  required?: boolean;
  type?: string;
}

export default function ConfirmAddress({
  address,
  setAddress,
  nextStep,
  prevStep,
  customer,
  setCustomer,
  finalSubmission
}) {
  const handleChange = e => {
    const { name, value } = e.target;

    setAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddress = async e => {
    await e.preventDefault();

    // search for customer
    const fetchedCustomer = await fetchCustomer(address.email);

    // check if no customer was found
    if (fetchedCustomer.length === 0) {
      // create customer
      const createdCustomer = await createCustomer(address);

      // check if there was an error when creating customer
      if (createdCustomer.error) {
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
          value={address.name}
          handleChange={handleChange}
          required
        />
        <FormField
          name='address_1'
          value={address.address1}
          handleChange={handleChange}
          required
        />
        <FormField
          name='address_2'
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
          name='postal_code'
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
