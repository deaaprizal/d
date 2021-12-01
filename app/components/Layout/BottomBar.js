import React, { useState } from "react";
export const scope = "app.component.BottomBar";

export default function BottomBar({ halfmoon, onActive }) {
  return (
    <>
      <nav className="navbar navbar-fixed-bottom">
        <div
          className="navbar-brand ml-xl-10"
          onClick={() => halfmoon.toggleSidebar()}
          id="navbar-fixed-bottom-dropdown-toggle"
        >
          ⚙
        </div>
        <a className="navbar-brand ml-auto mb-10" href={"#"}>➕</a>
        <a
          className="navbar-brand ml-auto mr-xl-10"
          href="#mistery-box"
          data-toggle="tooltip"
          data-title="Hi cuy! bener banget, ada course terbaru nih!"
          role="button"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          🔔
        </a>
      </nav>
    </>
  );
}
