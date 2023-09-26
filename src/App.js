import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pageTitle, setPageTitle] = useState('VPS1');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleTitleChange = (event) => {
    setPageTitle(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UI 1
          <br />
          Esta é uma pagina de testes em React!
          <br />
          Novo teste!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </header>
    </div>
  );
}

export default App;
