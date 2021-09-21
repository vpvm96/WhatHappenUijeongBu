import { createStore, combineReducers } from 'redux';

const value = []

const reducer = (state = value, action) => {
  if ( action.type === '') {
    
    return setState

  } else {

    return state
  }
  
};

const alert = true;

const reducer2 = (state = alert, action) => {
  return state
};

const store = createStore(combineReducers({ reducer, reducer2 }));

export default store

