import "./ResultSearch.css";

const ResultSearch = ({ isError }) => {
  return (
    <section className="result">
      <h1
        className={`result__heading ${isError ? "result__heading_error" : ""}`}
      >
        {isError
          ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          : "Ничего не найдено"}
      </h1>
    </section>
  );
};

export default ResultSearch;
