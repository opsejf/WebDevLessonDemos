import logo from './logo.svg';
import Person from './Person.js';
import './App.css';


function list(data){
  return data.map(item=>{
    return item > 'b' ? <li>{item}</li> : <li>***{item}</li>
    }
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ol>
          {list(['!a', 'b', 'c', 'x', 'y', 'z'])}
        </ol>

        <ul>
          {list([1,2,3])}
        </ul>

        <Person test="artist" list="one,two,three" type="UX/UI" colour="pink" name="bob"/>

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
