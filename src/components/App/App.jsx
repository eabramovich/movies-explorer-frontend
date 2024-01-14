import React from 'react';
import "../App/App.css";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';

function App() {
  return (
    <div className="App">
     <div className="page">
      <Header />
      <Promo />
      <AboutProject />
     </div>
    </div>
  );
}

export default App;
