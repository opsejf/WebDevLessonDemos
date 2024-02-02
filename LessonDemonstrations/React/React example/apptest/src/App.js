import logo from './logo.svg';
import Person from './Person.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person test="superhero" type="UX/UI" colour="pink"/>

        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
