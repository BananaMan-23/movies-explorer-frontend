import { LENGTH_OF_SHORTFILMS } from './constants';

const filterData = (nameRu, nameEN, duration, isChecked, searchQuery) => {
    return (nameRu.toLowerCase().includes(searchQuery.trim().toLowerCase())
        || nameEN.toLowerCase().includes(searchQuery.trim().toLowerCase()))
        && (isChecked ? duration <= LENGTH_OF_SHORTFILMS : duration);
};

export const validateSearch = (isSaveInLocalStorage, searchQuery, searchQueryName, setNameError, setMovies, movies, isChecked, moviesName, errorMovies) => {
    isSaveInLocalStorage && localStorage.setItem(searchQueryName, searchQuery);

    if (searchQuery.trim() === '') {
        setNameError('Нужно ввести ключевое слово');
        setMovies(errorMovies);
        isSaveInLocalStorage && localStorage.setItem(moviesName, JSON.stringify(errorMovies));
    } else {
        const filteredData = movies.filter((item) => filterData(item.nameRU, item.nameEN, item.duration, isChecked, searchQuery));
        setMovies(filteredData);
        isSaveInLocalStorage && localStorage.setItem(moviesName, JSON.stringify(filteredData));
    };
};

export const handleCheckboxChange = (isSaveInLocalStorage, searchQueryName, isChecked, setIsChecked, isShortFilm, movies, searchQuery, setMovies, moviesName) => {
    setIsChecked(isChecked);
    isSaveInLocalStorage && localStorage.setItem(isShortFilm, String(isChecked));
    isSaveInLocalStorage && localStorage.setItem(searchQueryName, searchQuery);

    if (isSaveInLocalStorage && (localStorage.getItem(searchQueryName) !== '')) {
        const filteredData = movies.filter((item) => filterData(item.nameRU, item.nameEN, item.duration, isChecked, searchQuery));
        setMovies(filteredData);
        localStorage.setItem(moviesName, JSON.stringify(filteredData));
    } else if (!isSaveInLocalStorage) {
        const filteredData = movies.filter((item) => filterData(item.nameRU, item.nameEN, item.duration, isChecked, searchQuery));
        setMovies(filteredData);
    };
};