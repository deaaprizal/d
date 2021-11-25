import React, {useState, useEffect} from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import BottomBar from "./BottomBar";
export const scope = "app.containers.HomePage";
const halfmoon = require("halfmoon");

export default function Home() {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
    <div
      className="page-wrapper with-sidebar with-navbar-fixed-bottom"
      data-sidebar-type="overlayed-sm-and-lg"
    >
      <SideBar halfmoon={halfmoon} bgTheme={bgTheme} setBgTheme={setBgTheme}/>
      <Content halfmoon={halfmoon} bgTheme={bgTheme}/>
      <BottomBar halfmoon={halfmoon} />
    </div>
  );
}
