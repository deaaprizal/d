import React, { useState } from "react";
export const scope = "app.containers.playground";
export default function Playground() {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className="content row">
        <div className="col-12-xl col-lg">
          <h1>Playground</h1>
        </div>
      </div>
    </div>
  );
}
