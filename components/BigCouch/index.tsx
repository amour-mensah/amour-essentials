import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import { ActionButton } from '../../css/common';

const StyledCouchSection = styled.section`
  width: 100%;
  height: 70vh;
  padding: 2rem 0;
  text-align: center;
`;

const StyledImageDiv = styled.div`
  background: url('/pexels-pixabay-276534.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 70%;
  height: 90%;
  margin: auto;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${t.colors.white};
    width: max-content;

    h3 {
      font-size: 2.8rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 2rem;
    }

    p {
      font-size: 2rem;
      font-family: ${t.fonts.secondary};
      margin-bottom: 2rem;

      span {
        font-style: italic;
      }
    }
  }
`;

export default function BigCouch() {
  return (
    <StyledCouchSection>
      <StyledImageDiv>
        <div>
          <h3>Header Title Gotham Book 60pt</h3>
          <p>
            Description text Garamond Premier Pro Regular or <span>Italic</span>{' '}
            45pt
          </p>
          <ActionButton>Action Button</ActionButton>
        </div>
      </StyledImageDiv>
    </StyledCouchSection>
  );
}
