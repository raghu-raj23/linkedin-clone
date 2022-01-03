import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path = '/' element = {<Login />}>
          </Route>
          <Route path = '/home' element = { 
          <>
            <Header className = "header"/>
            <Home className = 'home' />
          </>
          }
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
