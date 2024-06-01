import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteGame,
  listGames,
  updateGameStatus,
} from "../../../services/GameService";
import "./ListGame.css";
import Toggle from "./Toggle";

const ListGame = () => {
  const [games, setGames] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllGames();
  }, []);
  const handleToggle = (id, newState) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, isActive: newState } : game
      )
    );
  };

  function toggleGame(id, status) {
    updateGameStatus(id, !status)
      .then((response) => {
        getAllGames();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getAllGames() {
    listGames()
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewGame() {
    navigator("/add-game");
  }

  function updateGame(id) {
    navigator(`edit-game/${id}`);
  }

  function removeGame(id) {
    deleteGame(id)
      .then((response) => {
        getAllGames();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="list-game-container">
      <div>
        <h2 className="list-game-title">List of Games</h2>
        <button type="button" className="btn btn-primary" onClick={addNewGame}>
          Add Game
        </button>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Release Date</th>
              <th>Version</th>
              <th>Game Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.name}</td>
                <td>
                  {game.description.length > 50
                    ? `${game.description.substring(0, 25)}...`
                    : game.description}{" "}
                </td>
                <td>{game.priceGame}</td>
                <td>
                  <Toggle
                    id={game.id}
                    isActive={game.status}
                    onToggle={handleToggle}
                  />
                </td>
                <td>{game.releaseDate}</td>
                <td>{game.version}</td>
                <td>{game.gameType.name}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateGame(game.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeGame(game.id)}
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

export default ListGame;
