import React, { useState } from "react";
import ProgramFiles from "./Drive-C/ProgramFiles";
export const scope = "app.containers.defaultpage";

//main routes: showing default component
export default function Default() {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  return <ProgramFiles bgTheme={bgTheme} setBgTheme={setBgTheme} />;
}
