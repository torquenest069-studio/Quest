import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Use the actual component names from your files
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import Leadership from './components/Home/Leadership';
import GlobalCompliance from './components/Home/GlobalCompliance';
import Contact from './components/Home/Contact';
import About from './components/Home/About';
import Careers from './components/Home/Careers';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar /> 
        
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/compliance" element={<GlobalCompliance />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/About" element={<About />} />
               <Route path="/Careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;