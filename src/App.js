import { LoadScript } from '@react-google-maps/api';
import './App.css';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import Gallery from './Gallery.js';
import Reviews from './Reviews';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="font-sans color-text-primary">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                  libraries={['places']}>
        <Header />
        <Hero /> 
        <About />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </LoadScript>
    </div>
  );
}

export default App;
