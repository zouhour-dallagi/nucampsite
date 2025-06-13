import React from 'react';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import Footer from './components/Footer';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
     
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="contact" element={<ContactPage/>} />
            <Route path="directory" element={<CampsitesDirectoryPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
       
        
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
