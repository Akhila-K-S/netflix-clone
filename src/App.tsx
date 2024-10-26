import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowPost/RowPost";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost />
    </div>
  );
};

export default App;
