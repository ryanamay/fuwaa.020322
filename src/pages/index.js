import Image from 'next/image';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="font-Manrope">
        <SEO
          title="Home"
          
         />
        <Navbar />
        <Header />
        <Content />
        <Footer />
    </main>
  )
}
