import {useEffect} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import "./App.css";
import MainPage from "../../pages/MainPage";
import {useAppContext} from "../../contexts/AppContext";
import MoviesPage from "../../pages/MoviesPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import SavedMoviesPage from "../../pages/SavedMoviesPage";
import ProfilePage from "../../pages/ProfilePage";
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import {ProtectedRouteElementForUnauthorizedUser} from "../Routes/Routes";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isLoggedIn, setIsLoggedIn,
    setCurrentUser, setIsLoadingMovies,
    setMovies, setSavedMovies,
    setFilteredSavedMovies, setIsStatusPopupOpen,
    isStatusPopupOpen
  } = useAppContext();
  const checkUser = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          setCurrentUser(res);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  useEffect(() => {
    setIsLoadingMovies(true);
    if (isLoggedIn) {
      Promise.all([moviesApi.getAllMovies(), mainApi.getMovies()])
        .then(([movies, savedMovies]) => {
          setMovies(movies);
          setSavedMovies(savedMovies);
          setFilteredSavedMovies(savedMovies);
          setIsLoadingMovies(true);
        })
        .catch((err) => {
          setIsLoadingMovies(false);
          console.log(`Возникла ошибка: ${err}`);
        });
    }
    checkUser();
  }, [isLoggedIn]);

  useEffect(() => {
    setTimeout(() => {
      setIsStatusPopupOpen(false);
    }, 2000);
  }, [isStatusPopupOpen]);

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route path="/" element={<MainPage isLoggedIn={isLoggedIn}/>}/>
          <Route
            path="/movies"
            element={<ProtectedRouteElementForUnauthorizedUser element={<MoviesPage/>}/>}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRouteElementForUnauthorizedUser element={<SavedMoviesPage/>}/>}
          />
          <Route
            path="/profile"
            element={<ProtectedRouteElementForUnauthorizedUser element={<ProfilePage/>}/>}
          />
          <Route
            path="/signup"
            element={
              isLoggedIn && location.pathname === "/signup" ? (
                navigate("/movies")
              ) : (
                <RegisterPage/>
              )
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn && location.pathname === "/signin" ? (
                navigate("/movies")
              ) : (
                <LoginPage/>
              )
            }
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
      <InfoTooltip/>
    </div>
  );
};

export default App;