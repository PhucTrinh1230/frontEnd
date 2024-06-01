import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createGameImage,
  getGameImage,
  updateGameImage,
} from "../../../services/GameImageService";
const GameImage = () => {
  const [nameImage, setNameImage] = useState("");
  const [game, setGame] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { id } = useParams();
  const navigator = useNavigate();
  const [errors, setErrors] = useState({
    nameImage: "",
    game: "",
    date: "",
  });

  useEffect(() => {
    if (id) {
      getGameImage(id)
        .then((response) => {
          setNameImage(response.data.nameImage);
          setGame(response.data.game.id); // Assuming game is an object with an id
          setDate(response.data.date.split("T")[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleNameImage = (e) => setNameImage(e.target.value);
  const handleGame = (e) => setGame(e.target.value);
  const handleDate = (e) => setDate(e.target.value);

  function saveOrUpdateGameImage(e) {
    e.preventDefault();
    if (validateForm()) {
      const gameImage = {
        nameImage,
        game: { id: game }, // Assuming game is referenced by id
        date,
      };

      if (id) {
        updateGameImage(id, gameImage)
          .then((response) => {
            navigator("/gameimages");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createGameImage(gameImage)
          .then((response) => {
            navigator("/gameimages");
          })
          .catch((error) => {
            console.error("Create error:", error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (nameImage.trim()) {
      errorsCopy.nameImage = "";
    } else {
      errorsCopy.nameImage = "Image name is required";
      valid = false;
    }
    if (game) {
      errorsCopy.game = "";
    } else {
      errorsCopy.game = "Game is required";
      valid = false;
    }
    if (date.trim()) {
      errorsCopy.date = "";
    } else {
      errorsCopy.date = "Date is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="form-container">
      <div className="game-image-container">
        <h2 className="game-image-title">
          {id ? "Update Game Image" : "Add Game Image"}
        </h2>
        <div className="game-image-form">
          <form onSubmit={saveOrUpdateGameImage}>
            <div className="form-group">
              <label>Image Name</label>
              <input
                type="text"
                placeholder="Enter Image Link"
                value={nameImage}
                onChange={handleNameImage}
                className={`form-control ${
                  errors.nameImage ? "is-invalid" : ""
                }`}
              />

              {errors.nameImage && (
                <div className="invalid-feedback">{errors.nameImage}</div>
              )}
            </div>
            <div className="form-group">
              <label>Game</label>
              <input
                type="text"
                placeholder="Enter Game ID"
                value={game}
                onChange={handleGame}
                className={`form-control ${errors.game ? "is-invalid" : ""}`}
              />
              {errors.game && (
                <div className="invalid-feedback">{errors.game}</div>
              )}
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={handleDate}
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
              />
              {errors.date && (
                <div className="invalid-feedback">{errors.date}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={saveOrUpdateGameImage}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameImage;
