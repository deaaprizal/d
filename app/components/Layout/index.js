import React, { useState, useEffect } from "react";
import SideBar from "../Layout/SideBar";
import BottomBar from "../Layout/BottomBar";
import MisteryBox from "../misterybox";
export const scope = "app.containers.layout";
const halfmoon = require("halfmoon");

export default function Layout(props) {

  return (
    <div
      className="page-wrapper with-sidebar with-navbar-fixed-bottom"
      data-sidebar-type="overlayed-sm-and-lg"
    >
      <SideBar halfmoon={halfmoon}/>
      <MisteryBox />
      {props.children}
      <BottomBar halfmoon={halfmoon} />
    </div>
  );
}
