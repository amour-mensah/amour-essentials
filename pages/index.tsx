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
  newArrivals?: any;
}

export default function Home({
  heroContent,
  feature1,
  feature2,
  bigCouchContent,
  newArrivals
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
      <NewArrivals newArrivals={newArrivals} />
      <Reviews />
      <MailingList />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetching hero content
  const heroContent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hero?token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  // fetching feature 1 content
  const feature1Content = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/feature-1?token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  // fetching feature 2 content
  const feature2Content = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/feature-2?token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  // fetching big couch content
  const bigCouchContent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/big-couch?token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  // fetching new arrivals
  const newArrivals = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?new_arrival=true&token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  return {
    props: {
      heroContent,
      feature1: feature1Content,
      feature2: feature2Content,
      bigCouchContent,
      newArrivals
    }
  };
}
