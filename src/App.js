import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Preloader, Placeholder } from 'react-preloading-screen';



function App() {
  return (
    <Router>
      <Preloader>
        <Placeholder>
          <span>Loading...</span>
        </Placeholder>
      </Preloader>
      {/* <div id="app" className="loader"></div> */}
      <div className="App">
        <Header/>
        <Route path='/' component={Feed} exact/>
        <Route activeClassName="active" path='/profile' component={Profile}/>
      </div>
    </Router>
  );
}

export default App;
