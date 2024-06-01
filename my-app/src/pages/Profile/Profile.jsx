import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import React from "react";
import SidebarProfile from "./ContentProfile/SidebarProfile";
import { Route, Routes } from "react-router-dom";
import ContentProfile1 from "./ContentProfile/ContentProfile1";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-4">
        <SidebarProfile />
      </div>
      <div className="col-8">
        <Routes>
          <Route path="profile1" element={<ContentProfile1 />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
