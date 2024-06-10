
// import './App.css';

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import StoreGame from './pages/Store/Storegame';
import Cart from './pages/Cart/cart';
import Login from './pages/Login/Login';
import Productdetail from './pages/Product/deatil';
import About from './pages/AboutUs/about';
import ContentProfilePage3 from './components/layout/ContentProfile/ContentProfile3';
import CrudStaff from './pages/Admin/CrudStaff';
import Notfound from './pages/Notfound/Notfound';
import ProtectedRoute from './pages/Decentralization/ProtectedRoute';
import RoleBasedRoute from './pages/Decentralization/RoleBasedRoute';
import Register from './pages/Login/Register';

function App() {
  const currentURL = window.location.href;

  let roles = localStorage.getItem('roleByLogin');


  function getisAuth() {
    if (roles != null)
      return true;
      else
      return false;
  }

  const isAuthenticated = getisAuth();
  return (

    <React.Fragment>
      {/* <Header/>
    <Slidebar/>
    <Content/> */}
      {/* <MainContent/> */}
      {/* <MainContentProfile/> */}
      {/* <BrowserRouter>
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
  

      <Routes >

     
        <Route path="" element={<Login/>}></Route>
        <Route path="/profile/*" element={<MainContentProfile />}></Route>
        <Route path="/support/*" element={<MainContent/>}></Route>
        <Route path="/user/*" element={<MainContentProfile/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>       
        <Route path="/detail" element={<Productdetail/>}></Route>
        <Route path="/store" element={<StoreGame/>}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
       



        <Route path="/admin/staff" element={<CrudStaff/>}></Route>
      </Routes>
      <FooterProfile/>
    </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Notfound/>} />

          <Route path="/" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HeaderProfile/>
              <Register/>
              <FooterProfile/>
            </ProtectedRoute>
          } />

          <Route path="/admin/*" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['ADMIN']}>
                 <HeaderProfile/>
              <CrudStaff />
              <FooterProfile/>
            </RoleBasedRoute>
          } />

          <Route path="/store" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN','USER']}>
              <StoreGame />

            </RoleBasedRoute>
          } />

          <Route path="/cart" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN','USER']}>
              < Cart/>

            </RoleBasedRoute>
          } />

        </Routes>
      </BrowserRouter>

    </React.Fragment>


  );
}

export default App;
