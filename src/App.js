import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UI 1
          <br/>
          Esta é uma pagina de testes em React!
          <br/>
          Automated Github Integration implementado!
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

