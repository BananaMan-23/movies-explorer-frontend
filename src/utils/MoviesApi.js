import { HEADERS, BASE_URL_MOVIES_API } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const getAllMovies = () => {
    return fetch(`${BASE_URL_MOVIES_API}/beatfilm-movies`, {
        method: 'GET',
        headers: HEADERS,
    }).then((res) => checkResponse(res));
};