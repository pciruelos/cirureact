import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import Newpage from './components/Newpage/Newpage';

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <Navbar/>

      <Switch>
        <Route exact path="/" component={Home, About, Skills, Services, Projects, Portfolio, Contact, Footer} />
        <Route path="/p" component={Newpage} />

      </Switch>
      

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

