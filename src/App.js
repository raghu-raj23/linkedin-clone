import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
    return () => {
      console.log('cleanup');
    }
  }, [])

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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
    getUserAuth: () => dispatch(getUserAuth())
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
