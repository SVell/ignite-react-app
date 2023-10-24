// Base URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`;

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Populra Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const gameDetailsURL = (id) =>
  `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_API}`;
export const gameScreenshotsURL = (id) =>
  `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;

// Searched game
export const searchGameURL = (game_name) =>
  `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}&search=${game_name}&page_size=9`;
