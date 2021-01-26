import './App.css';
import {Fragment} from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  return <Fragment>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </Fragment> ;
}

export default App;
