import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';

function App() {

  const [page, setPage] = useState("Home")

  const renderSection = ()=> {
    if(page === 'Home'){
      return <About />
    }else if (page === 'Projects'){
      return <Projects />
    } /* else if (page === 'Resume') {
      return <Resume />
    } */ else if (page === 'About') {
      return <About />
    }
  };

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div>
      <Navigation changeFunction={changePage} />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
