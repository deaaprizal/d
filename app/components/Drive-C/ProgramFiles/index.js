import React, { useEffect, useState } from "react";
import FrontEnd from "./frontend";
import BackEnd from "./backend";

export const scope = "app.component.programfiles";

export default function ProgramFiles({ halfmoon, bgTheme }) {
  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className="content row" style={{ margin: 0, padding: 0 }}>
        <div className="col-6-xl col-lg">
          <FrontEnd />
        </div>
        <div className="col-6-xl col-lg">
          <BackEnd />
        </div>
      </div>
    </div>
  );
}
