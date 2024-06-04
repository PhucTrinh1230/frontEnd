
// import './App.css';

import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Content from './components/layout/ContentSupport/Content';
import ContentPage2 from './components/layout/ContentSupport/ContentPage2';
import ContentPage3 from './components/layout/ContentSupport/ContentPage3';
import ContentPage4 from './components/layout/ContentSupport/ContentPage4';
import Slidebar from './components/layout/Slidebar';
import MainContent from './pages/Support/Support';
import MainContentProfile from './pages/Profile/Profile';
import LayoutSupport from './components/layout/LayoutSupport';
import ContentPage9 from './components/layout/ContentSupport/ContentPage9';
import Header from './components/layout/Header';
import HeaderProfile from './components/layout/Header/HeaderProfile';
import ContentProfile from './components/layout/ContentProfile/ContentProfile';
import FooterProfile from './components/layout/Footer/FooterProfile';

function App() {
  const currentURL = window.location.href;
  return (
 
    <React.Fragment>
    {/* <Header/>
    <Slidebar/>
    <Content/> */}
  {/* <MainContent/> */}
    {/* <MainContentProfile/> */}
    <BrowserRouter>
      {currentURL === `http://localhost:3000/support` ||
      currentURL === `http://localhost:3000/support/*` ||
      currentURL === `http://localhost:3000/support/support9`||
      currentURL === `http://localhost:3000/support/support4` ||
      currentURL === `http://localhost:3000/support/support3` 
      
      ? (
        <Header/>
      ) : (
        <HeaderProfile/>
      )}
      <Routes>
      <Route path="" element={<MainContentProfile />}></Route>
        <Route path="/profile/*" element={<MainContentProfile />}></Route>
        <Route path="/support/*" element={<MainContent/>}></Route>
        <Route path="/user/*" element={<MainContentProfile/>}></Route>
        <Route path="" element={<ContentPage9/>}></Route>
        {/* <Route path="/profile/user/profile/{:id}" element={<ContentProfile userId={3}/>}></Route> */}
      </Routes>
      <FooterProfile/>
    </BrowserRouter>
    </React.Fragment>
    

  );
}

export default App;
