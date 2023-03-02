import React from 'react'

// import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Possiblity, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possiblity />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App