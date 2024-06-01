import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/gameimages";

export const listGameImages = () => axios.get(REST_API_BASE_URL);

export const createGameImage = (gameImage) =>
  axios.post(REST_API_BASE_URL, gameImage);

export const getGameImage = (gameImageId) =>
  axios.get(REST_API_BASE_URL + "/" + gameImageId);

export const updateGameImage = (gameImageId, gameImage) =>
  axios.put(REST_API_BASE_URL + "/" + gameImageId, gameImage);

export const deleteGameImage = (gameImageId) =>
  axios.delete(REST_API_BASE_URL + "/" + gameImageId);

export const updateGameImageStatus = (gameImageId) =>
  axios.put(REST_API_BASE_URL + "/status/" + gameImageId);
