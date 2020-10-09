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
  feature1: any;
  feature2: any;
  bigCouchContent: any;
}

export default function Home({
  heroContent,
  feature1,
  feature2,
  bigCouchContent
}: HomeProps) {
  return (
    <>
      <header style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Nav />
      </header>
      <Hero heroContent={heroContent} />
      <Feature featureContent={feature1} />
      <Feature featureContent={feature2} order={2} />
      <BigCouch bigCouchContent={bigCouchContent} />
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

  const feature1Content = await fetch(
    'http://localhost:1337/feature-1'
  ).then(res => res.json());

  const feature2Content = await fetch(
    'http://localhost:1337/feature-2'
  ).then(res => res.json());

  const bigCouchContent = await fetch(
    'http://localhost:1337/big-couch'
  ).then(res => res.json());

  return {
    props: {
      heroContent,
      feature1: feature1Content,
      feature2: feature2Content,
      bigCouchContent
    }
  };
}
