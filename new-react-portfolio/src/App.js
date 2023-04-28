import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


import Navigation from "./components/Navigation";
import HomeSection from "./pages/Home";
import AboutSection from "./pages/About";
import PortfolioSection from "./components/portfolioSection";
import MusicSection from "./components/musicSection";
import GitSection from "./components/gitSection";
import WhoSection from "./components/whoSection";
import ContactSection from "./components/contactSection";
import Footer from './components/Footer';
import Header from './components/Header';


import './reset.css';
import './style.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  
  return (
    <div className="App">
      <section >
      <Header handleNavClick={handleNavClick} />
      </section>
      <main>
        <Navigation />
        <div>
          <section>
        {activeSection === 'Home' && <HomeSection />}
        {activeSection === 'About' && <AboutSection />}
        {activeSection === 'Portfolio' && <PortfolioSection />}
        {activeSection === 'Music' && <MusicSection />}
        {activeSection === 'First Git' && <GitSection />}
        {activeSection === 'Who' && <WhoSection />}
        {activeSection === 'Contact' && <ContactSection />}
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;