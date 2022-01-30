import Image from 'next/image';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import FadeIn from 'react-fade-in';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import { useEffect } from 'react';

export default function Home() {

useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);

})
  return (
    <main className="font-Manrope relative">
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
          <Contact />
            <Footer />
    </main>
  )
}
