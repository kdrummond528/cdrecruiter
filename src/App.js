import './App.css';
import "./components/Fonts/Liberator/Liberator-Heavy.otf";
import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Process from './components/Process';
import About from './components/About';
// import Header from './components/Header';
import Accomplish from './components/Accomplish';
import Resources from './components/Resources';
// import Blog from './components/Blog';
import Survey from './components/Survey';
import Gallery from './components/Gallery';
import Appt from './components/Appt';
import BackToTopBtn from './components/BackToTopBtn';
import { ChakraProvider, Image } from '@chakra-ui/react';
import FirstClass from './img/firstclass.png';

function App() {

  return (
    <ChakraProvider>
      <div className="App">

        <header>
          <Image className='firstclass'
            objectFit='cover'
            boxSize='60px'
            // maxW={{ base: '100%', sm: '50px' }}
            src={FirstClass} alt='First Class' />

          <Nav />

          <Link to='/home'>
            <p className='pg-name'>
              Petty Officer Drummond</p>
          </Link>
          <Link to='/home'><p className='pg-subname'>
            United States Navy Talent Scout</p></Link>

        </header>

        <>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/process" element={<Process />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/appt" element={<Appt />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/accomplish" element={<Accomplish />} />
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
