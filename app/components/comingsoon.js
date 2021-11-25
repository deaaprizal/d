import React, { useState } from "react";
export const scope = "app.containers.about";
const halfmoon = require("halfmoon");
export default function ComingSoon({ title }) {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  const [count, setCount] = useState(0);
  return (
    <div className={`content-wrapper ${bgTheme}`}>      
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <h2>{title}</h2>
        <a
          href={count >= 7 ? '#mistery-box' : '#'}
          data-toggle="tooltip"
          data-title="wah ketauan 😫"
          role="button"
          style={{
            textDecoration: "none",
            fontSize: "30px",
            marginBottom: 10,
            marginLeft: 10,
          }}
          onClick={() => setCount((count + 1))}
        >
          {" "}
          💌
        </a>
      </div>
    </div>
  );
}
