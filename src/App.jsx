import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import FeaturedWork from './components/FeaturedWork';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased relative">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="stack"><TechStack /></div>
      <div id="projects"><FeaturedWork /></div>
      <div id="experience"><Experience /></div>
      <div id="certifications"><Certifications /></div>
      <div><Interests /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
