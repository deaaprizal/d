import React, { useEffect, useState } from "react";
import FrontEnd from "./Journey/frontend";
import BackEnd from "./Journey/backend";

export const scope = "app.component.Content";

export default function Content({ halfmoon, bgTheme }) {
  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className='content'>
        <div className="row">
          <div className="col-6-xl col-lg">
            <FrontEnd />
          </div>
          <div className="col-6-xl col-lg">
            <BackEnd />
          </div>
        </div>
      </div>
    </div>
  );
}
