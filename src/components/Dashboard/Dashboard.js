import React from "react";
import Copyright from "../Copyright/Copyright";
import Barchart from "../Rechart/Barchart";
import Pichart from "../Rechart/Piechart";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Barchart></Barchart>
      <Pichart></Pichart>
      <Copyright></Copyright>
    </div>
  );
};

export default Dashboard;
