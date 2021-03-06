import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { theme as t } from '../../css';

const StyledMailingList = styled.section`
  width: 100%;
  background-color: ${t.colors.light};
  padding: 3rem 0;

  h3 {
    font-size: 2rem;
    color: #000000;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  p {
    text-align: center;
    font-family: ${t.fonts.secondary};
    font-size: 1.4rem;
    margin: 6rem 0;

    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
  }
`;

const StyledForm = styled.form`
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    display: block;
  }

  button {
    background-color: transparent;
    border: 1px solid #000000;
    margin-left: 1.2rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    cursor: pointer;

    @media (max-width: 425px) {
      margin: 2rem auto 0 auto;
    }

    :hover {
      background-color: ${t.colors.grey};
      color: ${t.colors.white};
    }
  }
`;

const StyledInput = styled.div`
  position: relative;

  input {
    background-color: transparent;
    text-indent: 1.5rem;
    padding: 0.8rem 1.5rem;
    border: none;
    border-bottom: 1px solid #000000;
    width: 40rem;
    font-size: 1.2rem;

    @media (max-width: 1024px) {
      width: 80%;
    }

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 1.2rem;
      color: ${t.colors.grey};

      @media (max-width: 1024px) {
        font-size: 1rem;
      }
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
`;

export default function MailingList() {
  return (
    <StyledMailingList>
      <h3>Join Our Mailing List</h3>
      <p>Sign up to be the first to hear about promotions, sales, and more!</p>
      <StyledForm>
        <StyledInput>
          <StyledIcon icon={faEnvelope} />
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email address'
          />
        </StyledInput>
        <button type='submit'>Subscribe</button>
      </StyledForm>
    </StyledMailingList>
  );
}
