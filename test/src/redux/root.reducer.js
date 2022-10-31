import { combineReducers } from "redux";
import gamesReducer from "./games/games.reducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    gameNamesArray: gamesReducer,
});
 
export default rootReducer;