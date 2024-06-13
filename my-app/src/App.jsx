
// import './App.css';

import React from 'react';
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
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
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Productdetail from './pages/Product/deatil';
import About from './pages/AboutUs/about';
import ContentProfilePage3 from './components/layout/ContentProfile/ContentProfile3';
import CrudStaff from './pages/Admin/CrudStaff';
import Notfound from './pages/Notfound/Notfound';
import ProtectedRoute from './pages/Decentralization/ProtectedRoute';
import RoleBasedRoute from './pages/Decentralization/RoleBasedRoute';
import Register from './pages/Login/Register';
import OAuth from './pages/OAuth/OAuth';
import Hello from './pages/OAuth/Hello';
import SidebarProfile from './components/layout/ContentProfile/SidebarProfile';
import { Row,Col } from 'react-bootstrap';
import ContentProfilePage2 from './components/layout/ContentProfile/ContentPage2';

function App() {
  const currentURL = window.location.href;
  const { email } = useParams();
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
          
          <Route path="/unauthorized" element={<Notfound />} />

          <Route path="/" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated}>
              
              <HeaderProfile/>
              <StoreGame/>
              <FooterProfile />
            </ProtectedRoute>
          } />



<Route path="/login" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated}>
              <HeaderProfile />
              <Login/>
              <FooterProfile />
            </ProtectedRoute>
          } />


<Route path="/" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HeaderProfile />
              <StoreGame/>
              <FooterProfile />
            </ProtectedRoute>
          } />




          <Route path="/admin/*" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['ADMIN']}>
              <HeaderProfile />
              <CrudStaff />
              <FooterProfile />
            </RoleBasedRoute>
          } />

<Route path="/store" element={
            <RoleBasedRoute isAuthenticated={!isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
               <HeaderProfile />
              <StoreGame />
              <FooterProfile />
            </RoleBasedRoute>
          } />



          <Route path="/store/:email" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
               <HeaderProfile />
              <StoreGame />
              <FooterProfile />
            </RoleBasedRoute>
          } />

<Route path="/store/:email/profile" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
             <HeaderProfile/>
              <Col xxl={3} xl={3} md={3} sm={3}>
              <SidebarProfile/>
              </Col>
              <Col xxl={9} xl={9} md={9} sm={9}>
              <ContentProfile/>
              </Col>
            </RoleBasedRoute>
          } />




          <Route path="/cart" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
              < Cart />

            </RoleBasedRoute>
          } />

          <Route path="/register" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
              <Register/>

            </RoleBasedRoute>
          } />


<Route path="/profile/:email" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
              <HeaderProfile/>
              <SidebarProfile/>
              <ContentProfile/>
              <FooterProfile/>
            </RoleBasedRoute>
          } />

<Route path="/profile/user/myprofile" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
              <HeaderProfile/>
              <Col xxl={3} xl={3} md={3} sm={3}>
              <SidebarProfile/>
              </Col>
              <Col xxl={9} xl={9} md={9} sm={9}>
              <ContentProfile/>
              </Col>
              <FooterProfile/>
            </RoleBasedRoute>
          } />


<Route path="/profile/user/orders" element={
            <RoleBasedRoute isAuthenticated={isAuthenticated} userRoles={roles} allowedRoles={['STAFF', 'ADMIN', 'USER']}>
              <HeaderProfile/>
              <Row>
                <Col xxl={3} xl={3} md={3} sm={3}>
              <SidebarProfile/>
              </Col>
              <Col xxl={9} xl={9} md={9} sm={9}>
              <ContentProfilePage2/>
              </Col>
              </Row>
              <FooterProfile/>
            </RoleBasedRoute>
          } />

        </Routes>

</BrowserRouter>

       {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={ <OAuth/>}></Route>
            <Route path="/hello" element={ <Hello/>}></Route> 
            <Route path="/hello/:email" element={ <Hello/>}></Route> 
        </Routes>
       </BrowserRouter> */}

    </React.Fragment>


  );
}

export default App;
