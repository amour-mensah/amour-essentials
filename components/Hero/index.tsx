import styled from 'styled-components';

const StyledHero = styled.div`
  background: url('/pexels-photo-54283.png');
  width: 100%;
  height: 100vh;
`;

export default function Hero() {
  return (
    <StyledHero>
      <h1>This is the Hero section</h1>
    </StyledHero>
  );
}
