import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch axios
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const searchedGamesData = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searchedGames: searchedGamesData.data.results,
    },
  });
};
