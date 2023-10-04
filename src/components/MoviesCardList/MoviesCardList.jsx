import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import Button from "../Buttons/Button";
import MoviesCard from "../MoviesCard/MoviesCard";
import coverOne from "../../images/pic1.jpg";
import coverTwo from "../../images/pic2.png";
import coverThree from "../../images/pic3.png";
import coverFour from "../../images/pic4.png";
import coverFive from "../../images/pic5.png";
import coverSix from "../../images/pic6.png";
import coverSeven from "../../images/pic7.png";
import coverEight from "../../images/pic8.png";
import coverNine from "../../images/pic9.png";
import coverTen from "../../images/pic10.png";
import coverEleven from "../../images/pic11.png";
import coverTwelve from "../../images/pic12.png";

const MoviesCardList = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/movies" && (
        <section className="movies" aria-label="фильмы">
          <ul className="movies__list">
            <MoviesCard
              image={coverOne}
              title="33 слова о дизайне"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverTwo}
              title="Киноальманах «100 лет дизайна»"
              time="1ч 17м"
              isSave={true}
            />
            <MoviesCard
              image={coverThree}
              title="В погоне за Бенкси"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverFour}
              title="Баския: Взрыв реальности"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverFive}
              title="Бег это свобода"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverSix}
              title="Книготорговцы"
              time="1ч 17м"
              isSave={true}
            />
            <MoviesCard
              image={coverSeven}
              title="Когда я думаю о Германии ночью"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverEight}
              title="Gimme Danger: История Игги и The Stooges"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverNine}
              title="Дженис: Маленькая девочка грустит"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverTen}
              title="Соберись перед прыжком"
              time="1ч 17м"
              isSave={true}
            />
            <MoviesCard
              image={coverEleven}
              title="Пи Джей Харви: A dog called money"
              time="1ч 17м"
              isSave={false}
            />
            <MoviesCard
              image={coverTwelve}
              title="По волнам: Искусство звука в кино"
              time="1ч 17м"
              isSave={false}
            />
          </ul>
          <Button className="movies__button" type="button" text="Ещё" />
        </section>
      )}

      {location.pathname === "/saved-movies" && (
        <section className="movies" aria-label="сохраненные фильмы">
          <ul className="movies__list">
            <MoviesCard
              image={coverTwo}
              title="Киноальманах «100 лет дизайна»"
              time="1ч 17м"
              isSave={true}
            />
            <MoviesCard
              image={coverSix}
              title="Книготорговцы"
              time="1ч 17м"
              isSave={true}
            />
            <MoviesCard
              image={coverTen}
              title="Соберись перед прыжком"
              time="1ч 17м"
              isSave={true}
            />
          </ul>
        </section>
      )}
    </>
  );
};

export default MoviesCardList;
