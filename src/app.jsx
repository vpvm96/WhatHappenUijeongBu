import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './app.css';
import Board from './components/board/board';
import Navbar from './components/navbar/navbar';
import AllSns from './components/sns/allSns';
import MySns from './components/sns/mySns';
import Login from './components/login/login';
import EditorBoard from './components/board/editorBoard';
import PrivateRoute from './router/privateRoute';
import PublicRoute from './router/publicRoute';
import { useAuth } from './context/authContext';

function App({ snsService, boardService }) {
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
        <Switch>
            <Route>
              <PrivateRoute path='/'>
                <Navbar
                  username={user.username}
                  onLogout={onLogout}
                  onAllSns={onAllSns}
                  onMySns={onMySns}
                />
              </PrivateRoute> 
              <PrivateRoute exact path='/:username'>
                <MySns snsService={snsService} />
              </PrivateRoute>
              <PrivateRoute exact path='/board'>
                <Board boardService={boardService} />
              </PrivateRoute>
              <PrivateRoute exact path='/editorBoard'>
                <EditorBoard boardService={boardService} user={user} />
              </PrivateRoute>
              <PublicRoute Restircted={true} exact path='/' component={Login}>
                <AllSns snsService={snsService} />
              </PublicRoute>
            </Route>
        </Switch>
    </div>  
  );
}

export default App;
