import React from "react";
import Weather from "./Weather";

function Header() {
  return (
    <header>
      <h1>Rider Journal</h1>
      <div className="weather-container">
        <Weather />
      </div>
    </header>
  );
}

export default Header;
