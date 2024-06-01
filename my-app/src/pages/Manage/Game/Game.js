// Game.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toggle from "./Toggle";
import { createGame, getGame, updateGame } from "../../../services/GameService";
import "./Game.css";

const Game = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceGame, setPriceGame] = useState(0);
  const [status, setStatus] = useState(false);
  const [releaseDate, setReleaseDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [version, setVersion] = useState("");
  const [gameType, setGameType] = useState(0);
  const { id } = useParams();
  const handleToggle = () => {
    setStatus(!status);
  };
  const navigator = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    priceGame: "",
    status: "",
    releaseDate: "",
    version: "",
    gameType: "",
  });

  useEffect(() => {
    if (id) {
      getGame(id)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
          setPriceGame(response.data.priceGame);
          setStatus(response.data.status);
          setReleaseDate(response.data.releaseDate.split("T")[0]);
          setVersion(response.data.version);
          setGameType(response.data.gameType.id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePriceGame = (e) => setPriceGame(parseFloat(e.target.value));
  const handleStatus = (e) => setStatus(e.target.value);
  const handleReleaseDate = (e) => setReleaseDate(e.target.value);
  const handleVersion = (e) => setVersion(e.target.value);
  const handleGameType = (e) => setGameType(parseInt(e.target.value, 10));

  function saveOrUpdateGame(e) {
    e.preventDefault();
    if (validateForm()) {
      const game = {
        name,
        description,
        priceGame,
        status,
        releaseDate,
        version,
        gameType,
      };

      console.log("Sending game data:", game);

      if (id) {
        updateGame(id, game)
          .then((response) => {
            console.log("Update response:", response.data);
            navigator("/games");
          })
          .catch((error) => {
            console.error("Update error:", error.response.data); // Log lỗi chi tiết từ API
          });
      } else {
        createGame(game)
          .then((response) => {
            console.log("Create response:", response.data);
            navigator("/games");
          })
          .catch((error) => {
            console.error("Create error:", error.response.data); // Log lỗi chi tiết từ API
          });
      }
    }
  } 

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }
    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
      valid = false;
    }
    if (version.trim()) {
      errorsCopy.version = "";
    } else {
      errorsCopy.version = "Version is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="form-container">
      <div className="game-container">
        <h2 className="game-title">{id ? "Update Game" : "Add Game"}</h2>
        <div className="game-form">
          <form onSubmit={saveOrUpdateGame}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Game Name"
                value={name}
                onChange={handleName}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                placeholder="Enter Game Description"
                value={description}
                onChange={handleDescription}
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
              />
              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                placeholder="Enter Game Price"
                value={priceGame}
                onChange={handlePriceGame}
                className={`form-control ${
                  errors.priceGame ? "is-invalid" : ""
                }`}
              />
              {errors.priceGame && (
                <div className="invalid-feedback">{errors.priceGame}</div>
              )}
            </div>
            <div className="form-group">
              <label>Status</label>
              <Toggle id={id} isActive={status} onToggle={handleToggle} />
            </div>
            <div className="form-group">
              <label>Release Date</label>
              <input
                type="date"
                value={releaseDate}
                onChange={handleReleaseDate}
                className={`form-control ${
                  errors.releaseDate ? "is-invalid" : ""
                }`}
              />
              {errors.releaseDate && (
                <div className="invalid-feedback">{errors.releaseDate}</div>
              )}
            </div>
            <div className="form-group">
              <label>Version</label>
              <input
                type="text"
                value={version}
                onChange={handleVersion}
                className={`form-control ${errors.version ? "is-invalid" : ""}`}
              />
              {errors.version && (
                <div className="invalid-feedback">{errors.version}</div>
              )}
            </div>
            <div className="form-group">
              <label>Game Type</label>
              <input
                type="text"
                value={gameType}
                onChange={handleGameType}
                className={`form-control ${
                  errors.gameType ? "is-invalid" : ""
                }`}
              />
              {errors.gameType && (
                <div className="invalid-feedback">{errors.gameType}</div>
              )}
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Game;
