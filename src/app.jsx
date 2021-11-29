import React from 'react';
import './app.css';
import { BrowserRouter as Route, Switch, useHistory } from 'react-router-dom';
// import Board from './components/board/board';
import Navbar from './components/navbar/navbar';
import AllSns from './components/sns/allSns';
import MySns from './components/sns/mySns';
// import Footer from './components/footer/footer';
// import Login from './components/login/login';
// import Issue from './components/navbar/issue';
// import Question from './components/navbar/question';
// import Free from './components/navbar/free';
// import Main from './components/main/main';
import { useAuth } from './context/authContext';

function App({ snsService }) {
  const history = useHistory();
  const { user, logout } = useAuth();

  const onAllSns = () => {
    history.push('/');
  };

  const onMySns = () => {
    history.push(`/${user.username}`);
  };

  const onLogout = () => {
    if (window.confirm('Do you want to log out?')) {
      logout();
      history.push('/');
    }
  };

  return (
    <div className="App">
      <Navbar
        username={user.username}
        onLogout={onLogout}
        onAllSns={onAllSns}
        onMySns={onMySns}
      />
      <Switch>
        (
          <>
            <Route exact path='/'>
              <AllSns snsService={snsService} />
            </Route>
            <Route exact path='/:username'>
              <MySns snsService={snsService} />
            </Route>
          </>
        )
      </Switch>
    </div>  
  );
}

export default App;
