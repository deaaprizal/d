import React from "react";

export const scope = "app.component.BottomBar";
export default function BottomBar({ halfmoon }) {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <div
        className="navbar-content"
        onClick={() => halfmoon.toggleSidebar()}
        id="navbar-fixed-bottom-dropdown-toggle"
      >
        📂
      </div>
      <div className="navbar-brand ml-auto">🔔</div>
      <span className="navbar-text ml-auto">🙋‍♂️</span>
    </nav>
  );
}
