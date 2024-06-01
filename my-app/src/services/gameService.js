import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/games";

export const listGames = () => axios.get(REST_API_BASE_URL);

export const createGame = (game) => axios.post(REST_API_BASE_URL, game);

export const getGame = (gameId) => axios.get(REST_API_BASE_URL + "/" + gameId);

export const updateGame = (gameId, game) =>
  axios.put(REST_API_BASE_URL + "/" + gameId, game);

export const deleteGame = (gameId) =>
  axios.delete(REST_API_BASE_URL + "/" + gameId);

export const updateGameStatus = (gameId) =>
  axios.put(REST_API_BASE_URL + "/status/" + gameId);
