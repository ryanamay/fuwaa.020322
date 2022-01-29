import Image from 'next/image';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
  return (
    <main className="">
        <SEO
          title="Home"
         />
        <Navbar />
        <Header />
        <Content />
    </main>
  )
}
