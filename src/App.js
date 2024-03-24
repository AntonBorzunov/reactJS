import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/navbar/nav";
import Profile from "./components/profile/Profile";
import Massage from "./components/Massage/Massage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/setting";
import { nanoid } from "nanoid";

// element={<Massage Dialogs={Dialogs} Massages={Massages}/>}/>

const App = (Props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="/Profile"
              element={
                <Profile />
              }
            />
            <Route
              path="/Massages"
              element={
                <Massage />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
