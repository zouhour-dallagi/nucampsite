import React from 'react';
import CampsitesList from './features/campsites/CampsitesList';
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
        <CampsitesList/>
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
