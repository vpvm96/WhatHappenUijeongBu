import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './components/board/board';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Issue from './components/navbar/issue';
import Question from './components/navbar/question';
import Free from './components/navbar/free';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <>
            <Navbar/>
            <Route exact path='/issue' component={Issue} />
            <Route exact path='/question' component={Question} />
            <Route exact path='/free' component={Free} />
            <Footer/>
      </>
      {/* <Board/> */}
       </Switch>
      </Router>
    </div>  
  );
}

export default App;
