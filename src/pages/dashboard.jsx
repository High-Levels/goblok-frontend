import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigasi=useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" onClick={()=>navigasi("/register")} />
      </div>
    </>
  );
};

export default Dashboard;
