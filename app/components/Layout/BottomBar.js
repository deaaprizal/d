import React, { useState } from "react";
export const scope = "app.component.BottomBar";

export default function BottomBar({ halfmoon, onActive }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-fixed-bottom">
        <div
          className="navbar-content"
          onClick={() => halfmoon.toggleSidebar()}
          id="navbar-fixed-bottom-dropdown-toggle"
        >
          📂
        </div>
        <a
          className="navbar-brand ml-auto"
          href={count >= 5 ? "#mistery-box" : "#"}
          data-toggle="tooltip"
          data-title="wah ketauan 😫"
          role="button"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            marginBottom: 10,
            marginLeft: 10,
          }}
          onClick={() => setCount(count + 1)}
        >
          🔔
        </a>
        <a className="navbar-text ml-auto" href={"#loginView"}>🙋‍♂️</a>
      </nav>
    </>
  );
}
