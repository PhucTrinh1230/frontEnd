import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteGameType,
  listGameTypes,
} from "../../../services/GameTypeService";

const ListGame = () => {
  const [gametypes, setGameTypes] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllGameTypes();
  }, []);

  function getAllGameTypes() {
    listGameTypes()
      .then((response) => {
        setGameTypes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewGameType() {
    navigator("/add-gametype");
  }

  function updateGameType(id) {
    navigator(`edit-gametype/${id}`);
  }

  function removeGameType(id) {
    deleteGameType(id)
      .then((response) => {
        getAllGameTypes();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="list-game-container">
      <div>
        <h2 className="list-game-title">List of Games</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addNewGameType}
        >
          Add Game
        </button>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gametypes.map((gametype) => (
              <tr key={gametype.id}>
                <td>{gametype.name}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateGameType(gametype.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeGameType(gametype.id)}
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
