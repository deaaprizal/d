import React, { useState, useEffect } from "react";
import SideBar from "../Layout/SideBar";
import BottomBar from "../Layout/BottomBar";
import MisteryBox from "../misterybox";
import ModalLogin from "../Modal/login";
import ModalRegister from "../Modal/register";
import { motion } from "framer-motion";
export const scope = "app.containers.layout";
const halfmoon = require("halfmoon");

export default function Layout(props) {
  function onSlideSidebar(x) {
    if (x >= 10) {
      halfmoon.toggleSidebar();
    }
  }

  return (
    <div
      className="page-wrapper with-sidebar with-navbar-fixed-bottom"
      data-sidebar-type="overlayed-sm-and-lg"
    >
      <SideBar halfmoon={halfmoon} />
      <MisteryBox />
      <ModalLogin />
      <ModalRegister />
      <motion.div
        className="position-absolute h-full w-100 z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(ev, inf) => {
          const { x, y } = inf.point;
          // console.log("x left",x)
          onSlideSidebar(x);
        }}
      />
      {props.children}
      <BottomBar halfmoon={halfmoon} />
    </div>
  );
}
