import React from "react";
import { HiOutlineMenu } from "react-icons/hi";

const TopBar = ({halfmoon}) => {
  return (
    <div className={`navbar d-flex justify-content-between align-items-center`}>
      <div
        className="navbar-brand ml-xl-10"
        onClick={() => halfmoon.toggleSidebar()}
        id="navbar-dropdown-toggle"
      >
        <HiOutlineMenu />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href={"#"}>
          course
        </a>
        <a
          className="navbar-brand"
          // href="#"
          href="#loginView"
          data-toggle="tooltip"
          data-title="hi!"
          role="button"
        >
          🔔
        </a>
      </div>
    </div>
  );
};

export default TopBar;
