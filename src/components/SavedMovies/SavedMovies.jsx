import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { validateSearch, handleCheckboxChange } from "../../utils/filterData";
import {useAppContext} from "../../contexts/AppContext";

const SavedMovies = () => {
  const location = useLocation();
  const {setIsLoadingSavedMovies, savedMovies, setFilteredSavedMovies, setIsSearchSavedMovies} = useAppContext();

  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = useState(
    localStorage.getItem("searchQuerySavedMovies") || ""
  );
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = useState(
    localStorage.getItem("isShortFilmSavedMovies") === "true"
  );
  const [nameError, setNameError] = useState("");
  const isSaveInLocalStorage = false;

  const handleSubmitSearchSavedMovies = (e) => {
    e.preventDefault();
    setNameError("");
    setIsSearchSavedMovies(true);
    setIsLoadingSavedMovies(true);
    validateSearch(
      isSaveInLocalStorage,
      searchQuerySavedMovies,
      "searchQuerySavedMovies",
      setNameError,
      setFilteredSavedMovies,
      savedMovies,
      isCheckedSavedMovies,
      "savedFilteredMovies",
      savedMovies
    );
  };

  const handleCheckboxChangeSavedMovies = (isChecked) => {
    setIsLoadingSavedMovies(true);
    handleCheckboxChange(
      isSaveInLocalStorage,
      "searchQuerySavedMovies",
      isChecked,
      setIsCheckedSavedMovies,
      "isShortFilmSavedMovies",
      savedMovies,
      searchQuerySavedMovies,
      setFilteredSavedMovies,
      "savedFilteredMovies"
    );
  };

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
    setIsSearchSavedMovies(false);
  }, [location.pathname]);

  return (
    <main>
      <SearchForm
        name="search-form-saved-movies"
        handleSubmitSearchFilteredMovies={handleSubmitSearchSavedMovies}
        handleCheckboxChangeFilteredMovies={handleCheckboxChangeSavedMovies}
        nameError={nameError}
        setSearchQueryFilteredMovies={setSearchQuerySavedMovies}
        searchQueryFilteredMovies={searchQuerySavedMovies}
        isCheckedFilteredMovies={isCheckedSavedMovies}
      />
      <MoviesCardList/>
    </main>
  );
};

export default SavedMovies;
