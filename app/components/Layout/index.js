import React, { useState, useEffect } from "react";
import SideBar from "../Layout/SideBar";
import BottomBar from "../Layout/BottomBar";
import MisteryBox from "../misterybox";
import ModalLogin from "../Modal/login";
import ModalRegister from "../Modal/register";
import ModalForgetPassword from "../Modal/forgetPassword";
import { motion } from "framer-motion";
import { coursePreview } from "../Drive-C/ProgramFiles/coursePreview";
import TopBar from "./TopBar";
export const scope = "app.containers.layout";
const halfmoon = require("halfmoon");
export default function Layout(props) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileView = 760;

  function handleResize(e) {
    // console.log("handleResize", e.target.innerWidth);
    setWindowSize(window.innerWidth);
  }
  function onSlideSidebar(x) {
    if (x >= 10) {
      halfmoon.toggleSidebar();
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div
      className={`page-wrapper with-sidebar ${
        windowSize > mobileView ? "with-navbar" : "with-navbar-fixed-bottom"
      }`}
      data-sidebar-type="overlayed-sm-and-lg"
    >
      <SideBar halfmoon={halfmoon} />
      {windowSize > mobileView && (
        <TopBar halfmoon={halfmoon} />
      )}
      {coursePreview()}
      <MisteryBox />
      <ModalLogin halfmoon={halfmoon} />
      <ModalRegister halfmoon={halfmoon} />
      <ModalForgetPassword halfmoon={halfmoon} />
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
      {windowSize < mobileView && <BottomBar halfmoon={halfmoon} />}
    </div>
  );
}
