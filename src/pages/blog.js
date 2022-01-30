import Image from 'next/image';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Content from '../components/About';

export default function Blog() {
  return (
    <main>
        <SEO
          title="Blog"
         />
        <Navbar />
        <Header />
    </main>
  )
}
