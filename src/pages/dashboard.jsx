import React from "react";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate, useLocation } from "react-router-dom";
import CardArticle from "../component/CardArticle";
import CardProfile from "../component/CardProfile";
import Banner from "../component/Banner";

const Dashboard = () => {
  const navigasi = useNavigate();
  return (
    <>
      <div className="grid mt-8">
        <div className="col-14">
          <Banner />
        </div>
        <div className="col-8 artikel">
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
          <div className="col-12">
            <CardArticle />
          </div>
        </div>
        <div className="col-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
