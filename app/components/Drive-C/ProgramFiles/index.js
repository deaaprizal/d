import React, { useEffect, useState } from "react";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Intro from "./intro";
import Level from "./level";

export const scope = "app.component.programfiles";

export default function ProgramFiles() {
  return (
    <div className={`content-wrapper`}>
      <Intro />
      <Level/>
      <div className="row">
        <FrontEnd />
        <BackEnd />
      </div>
    </div>
  );
}
