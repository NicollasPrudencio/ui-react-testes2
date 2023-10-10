import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ibcmedlogo from './iconeibcmed.png';
import './App.css';

function App() {
  const [pageTitle, setPageTitle] = useState('VPS2');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleTitleChange = (event) => {
    setPageTitle(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={ibcmedlogo} className="App-logo" alt="logo" />
        <p>
          UI 2
          <br />
          Esta é uma pagina de testes em React hospedada na VPS 2 da IBCMED!
        </p>
        <a
          className="App-link"
          href="https://docs.ibcmed.com.br/deploy/index.html"
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