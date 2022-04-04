import React from "react";
import Barchart from "../Rechart/Barchart";
import Pichart from "../Rechart/Piechart";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Barchart></Barchart>
      <Pichart></Pichart>
    </div>
  );
};

export default Dashboard;
