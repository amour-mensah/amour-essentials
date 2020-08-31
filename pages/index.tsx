import Head from 'next/head';
import styled from 'styled-components';
import { theme as t } from '../css/theme';

const StyledHome = styled.div`
  background-color: ${t.colors.primary};
`;

export default function Home() {
  return (
    <StyledHome>
      <h1>Home Page</h1>
    </StyledHome>
  );
}
