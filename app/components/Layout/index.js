import React, { useState } from "react";
import SideBar from "../Layout/SideBar";
import BottomBar from "../Layout/BottomBar";
export const scope = "app.containers.layout";
const halfmoon = require("halfmoon");

export default function Layout(props) {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
    <div
      className="page-wrapper with-sidebar with-navbar-fixed-bottom"
      data-sidebar-type="overlayed-sm-and-lg"
    >
      <SideBar halfmoon={halfmoon} bgTheme={bgTheme} setBgTheme={setBgTheme} />
      {props.children}
      <BottomBar halfmoon={halfmoon} />
    </div>
  );
}
