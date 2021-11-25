import React, { useState } from "react";
export const scope = "app.containers.about";
const halfmoon = require("halfmoon");

export default function About() {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
      <div className={`content-wrapper ${bgTheme}`}>
        <div className="content row">
          <div className="col-6-xl col-lg">
            <h1>testing</h1>
          </div>
          <div className="col-6-xl col-lg">
            <h1>oke mantap</h1>
          </div>
      </div>
    </div>
  );
}
