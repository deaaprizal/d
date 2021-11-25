import React, { useEffect } from "react";
export const scope = "app.component.SideBar";

export default function SideBar({ halfmoon, bgTheme, setBgTheme }) {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, [halfmoon]);

  const changeBgMode = () => {
    halfmoon.toggleDarkMode();
    bgTheme === "light-mode"
      ? setBgTheme("dark-mode")
      : setBgTheme("light-mode");
    console.info("theme is successfulya changed to: ", bgTheme);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-brand" onClick={() => changeBgMode()}>
          ✨ Deacourse ✨
        </div>
        <div className="sidebar-content">
          <input
            type="text"
            className="form-control"
            placeholder="Quick Access"
          />
          <div className="mt-10 font-size-12">
            Click <kbd>🎈</kbd> to get random directory
          </div>
        </div>
        <h5 className="sidebar-title">Local Disk (C:)</h5>
        <div className="sidebar-divider" />
        <a href="#" className="sidebar-link sidebar-link-with-icon active">
          <span className="sidebar-icon">💻</span>
          Program Files
        </a>
        <a href="/journey" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">👻</span>
          About
        </a>
        <br />
        <h5 className="sidebar-title">Local Disk (D:)</h5>
        <div className="sidebar-divider" />
        <a href="#" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">📑</span>
          Frontend
        </a>
        <a href="#" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">📔</span>
          Backend
        </a>
        <a href="#" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">🎪</span>
          Playground
        </a>
        <a href="#" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">💝</span>
          Favorite
        </a>
      </div>
    </div>
  );
}
