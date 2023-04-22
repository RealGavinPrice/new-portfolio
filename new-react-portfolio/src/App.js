import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


import Navigation from "./components/Navigation";
import HomeSection from "./pages/Home";
import AboutSection from "./components/aboutSection";
import PortfolioSection from "./components/portfolioSection";
import MusicSection from "./components/musicSection";
import GitSection from "./components/gitSection";
import WhoSection from "./components/WhoSection";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer';
import Header from './components/Header';


import './reset.css';
import './style.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Navigation />
        {activeSection === 'Home' && <HomeSection />}
        {activeSection === 'About' && <AboutSection />}
        {activeSection === 'Portfolio' && <PortfolioSection />}
        {activeSection === 'Music' && <MusicSection />}
        {activeSection === 'First Git' && <FirstGitSection />}
        {activeSection === 'Who' && <WhoSection />}
        {activeSection === 'Contact' && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
}

export default App;