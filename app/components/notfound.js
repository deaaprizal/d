import React, { useState } from "react";
export const scope = "app.containers.about";
const halfmoon = require("halfmoon");

export default function NotFound({ title }) {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className="content">{title}</div>
    </div>
  );
}
