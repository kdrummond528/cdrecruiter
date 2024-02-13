import './App.css';
import "./components/Fonts/Liberator/Liberator-Heavy.otf";
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Info from './components/Info';
import Benefits from './components/Benefits';
import Process from './components/Process';
import About from './components/About';
import Resources from './components/Resources';
// import Blog from './components/Blog';
import Survey from './components/Survey';
import Appt from './components/Appt';
import BackToTopBtn from './components/BackToTopBtn';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <div className="App">

        <header>

          {/* <Image borderRadius='full'
          boxSize='150px' className='ntag-logo' src={Ntag} /> */}

          <h1>Petty Officer Drummond</h1>
          <h2>United States Navy Talent Scout</h2>
          <Nav />
        </header>

        <>
          {/* <Nav /> */}
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/process" element={<Process />} />

              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/appt" element={<Appt />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
            </Routes>
          </div>
        </>

        <BackToTopBtn />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
