import React, { useState } from "react";
import SampleUseReduxSaga from "../../SampleUseReduxSaga";
export const scope = "app.containers.about";
const halfmoon = require("halfmoon");

function Frontend({ ...props }) {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className="content row">
        <div className="col-6-xl col-lg">
          <h1>FRONT END</h1>
        </div>
        <div className="col-6-xl col-lg">
          <h1>PAGES</h1>
        </div>
      </div>
      <SampleUseReduxSaga />
    </div>
  );
}

export default Frontend;
