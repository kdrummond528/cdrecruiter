import './App.css';
import "./components/Fonts/Liberator/Liberator-Heavy.otf";
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import About from './components/About';
import Process from './components/Process';
import Resources from './components/Resources';
import Blog from './components/Blog';
import Survey from './components/Survey';
import Appt from './components/Appt';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="App">

      <header>

        <h1>Petty Officer Drummond</h1>
        <h2>United States Navy Talent Scout</h2>

        <Nav
          showHome={() => setPageIndex(0)}
          showAbout={() => setPageIndex(1)}
          showBenefits={() => setPageIndex(2)}
          showProcess={() => setPageIndex(3)}
          showResources={() => setPageIndex(4)}
          showBlog={() => setPageIndex(5)}
          showContact={() => setPageIndex(6)}
          showSurvey={() => setPageIndex(7)}
          showAppt={() => setPageIndex(8)}
          active={pageIndex}
        />

      </header>

      {pageIndex === 0 ? (
        <Home />
      ) : pageIndex === 1 ? (
        <About />
      ) : pageIndex === 2 ? (
        <Benefits />
      ) : pageIndex === 3 ? (
        <Process />
      ) : pageIndex === 4 ? (
        <Resources />
      ) : pageIndex === 5 ? (
        <Blog />
      ) : pageIndex === 6 ? (
        <Contact />
      ) : pageIndex === 7 ? (
        <Survey />
      ) : pageIndex === 8 ? (
        <Appt />
      ) : (

        <Home />
      )}

      <BackToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
