import { GAMES,GAMENAMES } from './games.type';


export function setGames() {
    return {
        type: GAMES
    }
}
export function setGamesNames() {
    return {
        type: GAMENAMES
    }
}