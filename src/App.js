import React from "react";
import "./index.css";
import Search from "./Search.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
      </div>
      <Footer />
    </div>
  );
}
