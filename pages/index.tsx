import Head from 'next/head';
import { theme as t } from '../css';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import BigCouch from '../components/BigCouch';
import NewArrivals from '../components/NewArrivals';
import Reviews from '../components/Reviews';
import MailingList from '../components/MailingList';
import Footer from '../components/Footer';

interface HomeProps {
  heroContent: any;
}

export default function Home({ heroContent }: HomeProps) {
  return (
    <>
      <header style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Nav />
      </header>
      <Hero heroContent={heroContent} />
      <Feature />
      <Feature order={2} feature={2} />
      <BigCouch />
      <NewArrivals />
      <Reviews />
      <MailingList />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const heroContent = await fetch('http://localhost:1337/hero').then(res =>
    res.json()
  );

  return {
    props: {
      heroContent
    }
  };
}
