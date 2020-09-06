import Head from 'next/head';
import { theme as t } from '../css/theme';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import BigCouch from '../components/BigCouch';
import NewArrivals from '../components/NewArrivals';
import Reviews from '../components/Reviews';
import MailingList from '../components/MailingList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <header style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Nav />
      </header>
      <Hero />
      <Feature />
      <Feature order={2} />
      <BigCouch />
      <NewArrivals />
      <Reviews />
      <MailingList />
      <Footer />
    </>
  );
}
