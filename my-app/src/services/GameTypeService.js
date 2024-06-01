import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/gametypes";

export const listGameTypes = () => axios.get(REST_API_BASE_URL);

export const createGameType = (gameType) =>
  axios.post(REST_API_BASE_URL, gameType);

export const getGameType = (gameTypeId) =>
  axios.get(REST_API_BASE_URL + "/" + gameTypeId);

export const updateGameType = (gameTypeId, gameType) =>
  axios.put(REST_API_BASE_URL + "/" + gameTypeId, gameType);

export const deleteGameType = (gameTypeId) =>
  axios.delete(REST_API_BASE_URL + "/" + gameTypeId);
