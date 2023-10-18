import SavedMovies from '../components/SavedMovies/SavedMovies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const SavedMoviesPage = ({
    isLoggedIn,
    savedMovies,
    setFilteredSavedMovies,
    handleDeleteMovie,
    filteredSavedMovies,
    isSearchSavedMovies,
    setIsSearchSavedMovies,
    isLoadingSavedMovies,
    setIsLoadingSavedMovies,
    isLoadingMovies,
}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies
                savedMovies={savedMovies}
                filteredSavedMovies={filteredSavedMovies}
                setFilteredSavedMovies={setFilteredSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
                isSearchSavedMovies={isSearchSavedMovies}
                setIsSearchSavedMovies={setIsSearchSavedMovies}
                isLoadingSavedMovies={isLoadingSavedMovies}
                setIsLoadingSavedMovies={setIsLoadingSavedMovies}
                isLoadingMovies={isLoadingMovies} />
            <Footer />
        </>
    );
};

export default SavedMoviesPage;