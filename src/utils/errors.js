const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const UNAUTHORIZED = 401;
const CONFLICT = 409;
const FORBIDDEN = 403;
const NOT_UNIQE = 11000;

const SERVER_ERROR_TEXT = '500 На сервере произошла ошибка.';
const CONFLICT_TEXT = 'Пользователь с таким email уже существует.';
const UNAUTHORIZED_TEXT = 'Вы ввели неправильный логин или пароль.';

module.exports = {
    BAD_REQUEST,
    NOT_FOUND,
    SERVER_ERROR,
    UNAUTHORIZED,
    CONFLICT,
    FORBIDDEN,
    NOT_UNIQE,
    SERVER_ERROR_TEXT,
    CONFLICT_TEXT,
    UNAUTHORIZED_TEXT,
};