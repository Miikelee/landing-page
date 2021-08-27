import React from 'react';
//import logo from './logo.svg';
import Card from "./components/Card";
import Navbar from './components/Nav';
import  Jumbotron  from './components/Jumbotron';
import './App.css';


 export function App() {
  
  return <div className="container">
      <Navbar />
      <Jumbotron/>
      <div className="row justify-content-center">
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://i.pinimg.com/736x/27/7a/ee/277aee2822ca301e99b935277fe58887.jpg" /></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://wallpaperaccess.com/full/4779324.jpg"/></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://c.wallhere.com/photos/06/f4/wolf_sky_eyes_muzzle-692397.jpg!d"/></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://www.10wallpaper.com/wallpaper/medium/1808/China_Tibet_tranquil_lake_snow_mountain_sunshine_medium.jpg"/></div>
      </div>
  </div>
 };

 
     
  

