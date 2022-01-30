import Image from 'next/image';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="font-Manrope">
        <SEO
          title="Home"
         />
        <Navbar />
        <Header 
          image="/bg.png"
        />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </main>
  )
}
