import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSavedMovies, setIsLoadingSavedMovies] = useState(false);
  const [isStatusPopupOpen, setIsStatusPopupOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [textPopup, setTextPopup] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isSearchMovies, setIsSearchMovies] = useState(false);
  const [isSearchSavedMovies, setIsSearchSavedMovies] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );



  const contextValue = {
    isLoggedIn, setIsLoggedIn,
    filteredMovies, setFilteredMovies,
    isLoadingMovies, setIsLoadingMovies,
    isLoading, setIsLoading,
    isLoadingSavedMovies, setIsLoadingSavedMovies,
    isStatusPopupOpen, setIsStatusPopupOpen,
    isStatus, setIsStatus,
    isEdit, setIsEdit,
    textPopup, setTextPopup,
    status, setStatus,
    currentUser, setCurrentUser,
    movies, setMovies,
    savedMovies, setSavedMovies,
    filteredSavedMovies, setFilteredSavedMovies,
    isSearchMovies, setIsSearchMovies,
    isSearchSavedMovies, setIsSearchSavedMovies,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

