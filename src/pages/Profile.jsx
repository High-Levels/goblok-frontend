import React from "react";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate, useLocation } from "react-router-dom";
import CardArticle from "../component/CardArticle";
import SideMenuProfile from "../component/SideMenuProfile";
import Banner from "../component/Banner";
import CardProfileDetail from "../component/CardProfileDetail";

const Profile = () => {
  const [isLoggedIn] = useState(
    localStorage.getItem('refreshToken')
  )
  const navigasi = useNavigate();
  return (
    <>
      <div className="grid mt-8">
        <div className="col-14">
          {
            isLoggedIn ? (
              <></>
              ):(
              <Banner/>
            )
          }
        </div>
        <div className="col-8 artikel">
          <div className="col-12">
            <CardProfileDetail />
          </div>
          <div className="col-12">
            <CardArticle />
          </div>
          <div className="col-12">
            <CardArticle />
          </div>
          <div className="col-12">
            <CardArticle />
          </div>
          <div className="col-12">
            <CardArticle />
          </div>
          <div className="col-12">
            <CardArticle />
          </div>
        </div>
        <div className="col-4">
          <SideMenuProfile />
        </div>
      </div>
    </>
  );
};

export default Profile;
