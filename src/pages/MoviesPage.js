import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

function MoviesPage({ isLoggedIn }) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <Movies />
            </main>
            <Footer />
        </>
    );
}

export default MoviesPage;