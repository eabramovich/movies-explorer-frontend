import React from "react";
import "./Movies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import Footer from "../Footer/Footer";

function Movies({ cards }) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="content">
        <SearchForm />
        <MoviesCardList cards={cards}></MoviesCardList>
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
