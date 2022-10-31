import React, { useEffect, useState } from "react";
import GameItem from "../../components/GameItem/GameItem";
import styles from "./Games.module.css";
import { useDispatch, useSelector } from "react-redux";
import Selects from "../../components/GameSelect/GameSelect";
import GameButton from "../../components/GameButton/GameButton";
import { setGamesNames } from "../../redux/games/games.action";

export default function Games() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  const gameNames = useSelector((state) => state.gameNamesArray.gameNamesArray);

  useEffect(() => {
    dispatch(setGamesNames());
  }, []);

  const arr = gameNames.map((e) => ({ ...games[e], img: e }));

  function compareAge(a, b) {
    return b.collections.popularity - a.collections.popularity;
  }

  let sortedArr = arr.sort(compareAge);
  let sortedArrMonay = arr.sort(compareAge);
  let sortedArrMonayProvider = arr.sort(compareAge);

  const providers = [];
  sortedArr.map((e) => providers.push(e.provider));

  const provider = [...new Set(providers)];

  const [providerState, setProviderState] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setProviderState(event.target.value);
  };
  if (providerState) {
    sortedArr = sortedArr.filter((e) => e.provider === providerState);
  }
  const [currencyState, setStateCurrency] = React.useState("");

  const handleChangeCurrency = (event) => {
    event.preventDefault();
    setStateCurrency(event.target.value);
  };

  const monay = [];
  sortedArrMonay.map((e) => monay.push(...Object.keys(e.real)));
  const valute = [...new Set(monay)];
  if (currencyState) {
    sortedArrMonay = sortedArrMonay.filter((e) => e.real[currencyState]);
  }
  if (currencyState && providerState) {
    sortedArrMonayProvider = sortedArr.filter((e) => e.real[currencyState]&& e.provider === providerState);
  }

  let [count, setCount] = useState(12);

  if(sortedArr.length >12 || sortedArrMonay.length > 12 || sortedArrMonayProvider.length > 12){
    sortedArr = sortedArr.slice(0,count)
    sortedArrMonay  = sortedArrMonay.slice(0,count)
    sortedArrMonayProvider = sortedArrMonayProvider.slice(0,count)
  }
  return (
    <div className={styles.gamesContainer}>
      <div className={styles.gamesSelects}>
        <Selects
          handleChange={handleChangeCurrency}
          selectTitel={"Currency"}
          value={currencyState}
          providers={valute}
        />
        <Selects
          providers={provider}
          value={providerState}
          handleChange={handleChange}
          selectTitel={"Provider"}
        />
      </div>
      <div className={styles.gameItems}>
        {!currencyState && providerState
          && sortedArr.map((e, i) => (
              <div key={i}>
                <GameItem src="" title={e.title} name={e.img} />
              </div>
            ))
          }
          {!providerState && currencyState
          && sortedArrMonay.map((e, i) => (
              <div key={i}>
                <GameItem src="" title={e.title} name={e.img} />
              </div>
            ))}
          { currencyState && providerState && sortedArrMonayProvider.map((e, i) => (
            <div key={i}>
              <GameItem src="" title={e.title} name={e.img} />
            </div>
          ))}
          { !currencyState && !providerState &&
          sortedArr.map((e, i) => (
            <div key={i}>
              <GameItem src="" title={e.title} name={e.img} />
            </div>
          ))}
      </div>
      <div>
        <GameButton onClick={()=>setCount((e)=> e + 12)}/>
      </div>
    </div>
  );
}
