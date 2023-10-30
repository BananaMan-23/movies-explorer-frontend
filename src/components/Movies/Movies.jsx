import { useEffect, useState } from "react";
// import {
//   DESKTOP,
//   AMOUNT_CARDS_FOR_DESKTOP,
//   ROW_OF_CARDS_FOR_DESKTOP,
//   AMOUNT_CARDS_FOR_TABLET,
//   ROW_OF_CARDS_FOR_TABLET,
//   MOBILE,
//   AMOUNT_CARDS_FOR_MOBILE,
//   ROW_OF_CARDS_FOR_MOBILE,
// } from "../../utils/constants.js";
import useResizeWidth from "../../hooks/useResizeWidth";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { validateSearch, handleCheckboxChange } from "../../utils/filterData";
import {useAppContext} from "../../contexts/AppContext";

const Movies = () => {
  const windowWidth = useResizeWidth();

  const {
    setIsSearchMovies, setFilteredMovies, movies, filteredMovies,
  } = useAppContext();

  const [searchQueryFilteredMovies, setSearchQueryFilteredMovies] = useState(
    localStorage.getItem("searchQueryFilteredMovies") || ""
  );
  const [isCheckedFilteredMovies, setIsCheckedFilteredMovies] = useState(
    localStorage.getItem("isShortFilmFilteredMovies") === "true"
  );
  const [nameError, setNameError] = useState("");
  const isSaveInLocalStorage = true;

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

  const isDesktop = windowWidth >= 1140;
  const isMobile = windowWidth <= 480;

  const calculateCardCount = () => {
    if (isMobile) {
      if (filteredMovies.length <= 5) {
        return filteredMovies.length;
      } else {
        return 5;
      }
    } else if (isDesktop) {
      if (filteredMovies.length <= 12) {
        return filteredMovies.length;
      } else {
        return 12;
      }
    } else {
      if (filteredMovies.length <= 8) {
        return filteredMovies.length;
      } else {
        return 8;
      }
    }
  };

  const calculateCardCountStep = () => {
    if (isMobile) {
      return 2;
    } else if (isDesktop) {
      return 3;
    }
    return 2;
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
        handleShowCards={handleShowCards}
        visibleCardsCount={visibleCardsCount}
      />
    </main>
  );
};

export default Movies;
