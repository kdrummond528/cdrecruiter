import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Process from './components/Process';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="App">

      <Header />

      <Nav
        showHome={() => setPageIndex(0)}
        showAbout={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showProcess={() => setPageIndex(3)}

        active={pageIndex}
      />

      {pageIndex === 0 ? (
        <Home />
      ) : pageIndex === 1 ? (
        <About />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Process />
      ) : (
        <Home />
      )}

      <BackToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
