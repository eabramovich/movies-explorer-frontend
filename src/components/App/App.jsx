import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../App/App.css";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
