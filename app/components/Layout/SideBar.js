import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const scope = "app.component.SideBar";

export default function SideBar({ halfmoon }) {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, [halfmoon]);

  const changeBgMode = () => {
    halfmoon.toggleDarkMode();
  };

  function onSlideSidebar(x) {
    if (x < 10) {
      halfmoon.toggleSidebar();
    }
  }

  return (
    <motion.div
      className="sidebar"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(ev, inf) => {
        const { x, y } = inf.point;
        onSlideSidebar(x);
      }}
    >
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
          <kbd>🎈</kbd> beta version 0.1.0
          </div>
        </div>
        <h5 className="sidebar-title">Local Disk (C:)</h5>
        <div className="sidebar-divider" />
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">💻</span>
          Program Files
        </a>
        <a href="/c/about" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">👻</span>
          About
        </a>
        <br />
        <h5 className="sidebar-title">Local Disk (D:)</h5>
        <div className="sidebar-divider" />
        <a href="/d/frontend" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">📑</span>
          Frontend
        </a>
        <a href="/d/backend" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">📔</span>
          Backend
        </a>
        <a href="/d/playground" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">🎪</span>
          Playground
        </a>
        <a href="/d/favorite" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">💝</span>
          Favorite
        </a>
      </div>
    </motion.div>
  );
}
