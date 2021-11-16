import React from 'react';
import Board from './components/board/board';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Login from './components/login/login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      {/* <Login/> */}
      {/* <Board/> */}
    </div>  
  );
}

export default App;
