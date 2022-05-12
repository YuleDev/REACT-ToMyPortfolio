import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Biography from './components/Biography';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const [page, setPage] = useState("Home")

  const renderSection = ()=> {
    if(page === 'Home'){
      return <Home />
    }else if (page === 'Projects'){
      return <Projects />
    } else if (page === 'Biography') {
      return <Biography />
    } else if (page === 'About') {
      return <About />
    } else if (page === 'Contact') {
      return <Contact />
    }
  };

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div>
      <Navigation changeFunction={changePage}></Navigation>
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
