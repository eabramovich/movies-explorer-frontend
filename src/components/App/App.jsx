import React from 'react';
import "../App/App.css";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Technology from '../Technology/Technology';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
     <div className="page">
      <Header />
      <Promo />
      <AboutProject />
      <Technology />
      <AboutMe />
      <Portfolio />
      <Footer />
     </div>
    </div>
  );
}

export default App;
