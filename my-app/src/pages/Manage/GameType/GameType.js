// Game.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GameType.css";
import {
  createGameType,
  getGameType,
  updateGameType,
} from "../../../services/GameTypeService";

const Game = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigator = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
  });

  useEffect(() => {
    if (id) {
      getGameType(id)
        .then((response) => {
          setName(response.data.name);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleName = (e) => setName(e.target.value);

  function saveOrUpdateGame(e) {
    e.preventDefault();
    if (validateForm()) {
      const gameType = {
        name,
      };

      console.log("Sending game data:", gameType);

      if (id) {
        updateGameType(id, gameType)
          .then((response) => {
            console.log("Update response:", response.data);
            navigator("/gametypes");
          })
          .catch((error) => {
            console.error("Update error:", error.response.data); // Log lỗi chi tiết từ API
          });
      } else {
        createGameType(gameType)
          .then((response) => {
            console.log("Create response:", response.data);
            navigator("/gametypes");
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

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="form-container">
      <div className="game-container">
        <h2 className="game-title">
          {id ? "Update GameType" : "Add GameType"}
        </h2>
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
