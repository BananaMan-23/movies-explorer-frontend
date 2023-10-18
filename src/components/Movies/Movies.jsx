import { useEffect, useState } from "react";
import {
  DESKTOP,
  AMOUNT_CARDS_FOR_DESKTOP,
  ROW_OF_CARDS_FOR_DESKTOP,
  AMOUNT_CARDS_FOR_TABLET,
  ROW_OF_CARDS_FOR_TABLET,
  MOBILE,
  AMOUNT_CARDS_FOR_MOBILE,
  ROW_OF_CARDS_FOR_MOBILE,
} from "../../utils/constants.js";
import useResizeWidth from "../../hooks/useResizeWidth";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { validateSearch, handleCheckboxChange } from "../../utils/filterData";

const Movies = ({
  movies,
  filteredMovies,
  handleCreateMovie,
  savedMovies,
  handleDeleteMovie,
  setFilteredMovies,
  isSearchMovies,
  setIsSearchMovies,
  isLoading,
  isLoadingMovies,
}) => {
  const windowWidth = useResizeWidth();

  const [searchQueryFilteredMovies, setSearchQueryFilteredMovies] = useState(
    localStorage.getItem("searchQueryFilteredMovies") || ""
  );
  const [isCheckedFilteredMovies, setIsCheckedFilteredMovies] = useState(
    localStorage.getItem("isShortFilmFilteredMovies") === "true"
  );
  const [nameError, setNameError] = useState("");
  const isSaveInLocalStorage = true;

  // useEffect(() => {
  //   localStorage.setItem(
  //     "searchQueryFilteredMovies",
  //     searchQueryFilteredMovies
  //   );
  // }, [searchQueryFilteredMovies]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "isShortFilmFilteredMovies",
  //     JSON.stringify(!isCheckedFilteredMovies)
  //   );
  // }, [isCheckedFilteredMovies]);

  const handleSubmitSearchFilteredMovies = (e) => {
    e.preventDefault();
    setNameError("");
    setIsSearchMovies(true);
    validateSearch(
      isSaveInLocalStorage,
      searchQueryFilteredMovies,
      "searchQueryFilteredMovies",
      setNameError,
      setFilteredMovies,
      movies,
      isCheckedFilteredMovies,
      "filteredMovies",
      []
    );
  };

  const handleCheckboxChangeFilteredMovies = (isChecked) => {
    handleCheckboxChange(
      isSaveInLocalStorage,
      "searchQueryFilteredMovies",
      isChecked,
      setIsCheckedFilteredMovies,
      "isShortFilmFilteredMovies",
      movies,
      searchQueryFilteredMovies,
      setFilteredMovies,
      "filteredMovies"
    );
  };

  const isDesktop = windowWidth >= DESKTOP;
  const isMobile = windowWidth <= MOBILE;

  const calculateCardCount = () => {
    if (isMobile) {
      if (filteredMovies.length <= AMOUNT_CARDS_FOR_MOBILE) {
        return filteredMovies.length;
      } else {
        return AMOUNT_CARDS_FOR_MOBILE;
      }
    } else if (isDesktop) {
      if (filteredMovies.length <= AMOUNT_CARDS_FOR_DESKTOP) {
        return filteredMovies.length;
      } else {
        return AMOUNT_CARDS_FOR_DESKTOP;
      }
    } else {
      if (filteredMovies.length <= AMOUNT_CARDS_FOR_TABLET) {
        return filteredMovies.length;
      } else {
        return AMOUNT_CARDS_FOR_TABLET;
      }
    }
  };

  const calculateCardCountStep = () => {
    if (isMobile) {
      return ROW_OF_CARDS_FOR_MOBILE;
    } else if (isDesktop) {
      return ROW_OF_CARDS_FOR_DESKTOP;
    }
    return ROW_OF_CARDS_FOR_TABLET;
  };

  const cardsToShowInitial = calculateCardCount();
  const cardsToShow = calculateCardCountStep();

  const [visibleCardsCount, setVisibleCardsCount] =
    useState(cardsToShowInitial);

  useEffect(() => {
    setVisibleCardsCount(cardsToShowInitial);
  }, [filteredMovies]);

  useEffect(() => {
    if (visibleCardsCount % cardsToShow !== 0) {
      setVisibleCardsCount(
        visibleCardsCount +
          (cardsToShow -
            (visibleCardsCount -
              Math.floor(visibleCardsCount / cardsToShow) * cardsToShow))
      );
    }
  }, [cardsToShow]);

  const handleShowCards = () => {
    setVisibleCardsCount(visibleCardsCount + cardsToShow);
  };

  return (
    <main>
      <SearchForm
        name="search-form-movies"
        handleSubmitSearchFilteredMovies={handleSubmitSearchFilteredMovies}
        handleCheckboxChangeFilteredMovies={handleCheckboxChangeFilteredMovies}
        nameError={nameError}
        setSearchQueryFilteredMovies={setSearchQueryFilteredMovies}
        searchQueryFilteredMovies={searchQueryFilteredMovies}
        isCheckedFilteredMovies={isCheckedFilteredMovies}
      />
      <MoviesCardList
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
        handleCreateMovie={handleCreateMovie}
        savedMovies={savedMovies}
        handleDeleteMovie={handleDeleteMovie}
        isSearchMovies={isSearchMovies}
        handleShowCards={handleShowCards}
        isLoading={isLoading}
        visibleCardsCount={visibleCardsCount}
        isLoadingMovies={isLoadingMovies}
      />
    </main>
  );
};

export default Movies;
