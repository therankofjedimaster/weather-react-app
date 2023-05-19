import React from "react";
import "./index.css";
import Search from "./Search.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
