import React from "react";
import Download from "../components/bottomContainer/Download";
import Connect from "../components/bottomContainer/Connect";
import Orbit from "../components/orbit/Orbit";
import Header from "../components/siparişHazır/Header";


const Home = () => {
  return (
    <div className="">
    
      <Header />
      <Download />
      <Connect />
    </div>
  );
};

export default Home;
