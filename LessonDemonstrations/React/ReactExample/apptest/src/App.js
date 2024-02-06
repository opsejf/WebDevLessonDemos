import logo from './logo.svg';
import Person from './Person.js';
import Page from './Page.js';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// the import link above could be placed into the browserrouter etc line as they are
// all coming from the same source


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
        {/* <div onSubmit={e=>e.preventDefault()}>
          {/* <input type="button">Homepage</input> */}
          {/* <button onClick={<Link to="/">Help</Link>}>Help</button> */}
          {/* <p>
          <Link to="/">Hello</Link>
          </p>
        </div> */}

        {/* <ul>
          <li><Link to="/">Hello</Link></li>
        </ul> */}




        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Hello: Page 1</h1>} />
            <Route path="a"> 
              <Route index element={<h1>Bonjour: Page 2</h1>}/>
              <Route path='a'>
                <Route index element={<h2><Link to="/d">Bonjour: Extra Content</Link></h2>}/>
                <Route path="a" element={<h2>Bonjour: Extra Content squared</h2>}/>
              </Route>
              

            </Route>
            
            

            <Route path="b" element={<h1>Hola: Page 3</h1>} />
            <Route path="c" element={<h1>Gutentag: Page 4</h1>} />
            <Route path="d" element={<div><h1>Surprise</h1><Person /><hr></hr></div>}/>

          </Routes>
        
        </BrowserRouter>

        <Page />

        

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
