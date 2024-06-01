import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteGameImage,
  listGameImages,
} from "../../../services/GameImageService";

const ListGameImage = () => {
  const [gameImages, setGameImages] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllGameImages();
  }, []);

  function getAllGameImages() {
    listGameImages()
      .then((response) => {
        setGameImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewGameImage() {
    navigator("/add-gameimage");
  }

  function updateGameImage(id) {
    navigator(`edit-gameimage/${id}`);
  }

  function removeGameImage(id) {
    deleteGameImage(id)
      .then((response) => {
        getAllGameImages();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="list-gameimage-container">
      <div>
        <h2 className="list-gameimage-title">List of Game Images</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addNewGameImage}
        >
          Add Game Image
        </button>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image Name</th>
              <th>Game</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gameImages.map((gameImage) => (
              <tr key={gameImage.id}>
                <td>
                  <img
                    src={`${gameImage.nameImage}`}
                    alt="Name Image"
                    width="200px"
                  />
                </td>
                <td>{gameImage.game.name}</td>
                <td>{gameImage.date}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateGameImage(gameImage.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeGameImage(gameImage.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListGameImage;
