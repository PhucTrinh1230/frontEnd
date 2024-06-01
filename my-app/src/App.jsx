// import './App.css';

import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Content from "./components/layout/ContentSupport/Content";
// import ContentPage2 from "./components/layout/ContentSupport/ContentPage2";
// import Slidebar from "./components/layout/Slidebar";
import Game from "./pages/Manage/Game/Game";
import ListGame from "./pages/Manage/Game/ListGame";
import GameType from "./pages/Manage/GameType/GameType";
import ListGameType from "./pages/Manage/GameType/ListGameType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListGameImage from "./pages/Manage/GameImage/ListGameImage";
import GameImage from "./pages/Manage/GameImage/GameImage";
import Support from "./pages/Support/Support";
import Profile from "./pages/Profile/Profile";
import HeaderComponent from "./components/HeaderComponent";
import HeaderComponentSupport from "./components/HeaderComponentSupport";
// import MainContent from "./pages/Support/Support";
function App() {
  const currentURL = window.location.href;

  return (
    <BrowserRouter>
      {currentURL === `http://localhost:3000/support#` ||
      currentURL === `http://localhost:3000/support/*` ||
      currentURL === `http://localhost:3000/support/support9` ? (
        <HeaderComponentSupport />
      ) : (
        <HeaderComponent />
      )}
      <Routes>
        <Route path="/profile/*" element={<Profile />}></Route>
        <Route path="/support/*" element={<Support />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
