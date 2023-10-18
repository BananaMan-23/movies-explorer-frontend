import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

const MoviesPage = ({
    isLoggedIn,
    filteredMovies,
    movies,
    handleCreateMovie,
    savedMovies,
    handleDeleteMovie,
    setFilteredMovies,
    isSearchMovies,
    setIsSearchMovies,
    isLoading,
    isLoadingMovies,
}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <Movies
                filteredMovies={filteredMovies}
                movies={movies}
                setFilteredMovies={setFilteredMovies}
                handleCreateMovie={handleCreateMovie}
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
                isSearchMovies={isSearchMovies}
                setIsSearchMovies={setIsSearchMovies}
                isLoading={isLoading}
                isLoadingMovies={isLoadingMovies} />
            <Footer />
        </>
    );
};

export default MoviesPage;