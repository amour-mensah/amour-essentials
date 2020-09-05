import Head from 'next/head';
import { theme as t } from '../css/theme';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Feature from '../components/Feature';

export default function Home() {
  return (
    <>
      <header style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Nav />
      </header>
      <Hero />
      <Feature />
      <Feature order={2} />
    </>
  );
}
