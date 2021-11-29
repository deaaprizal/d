import React, { useState, useEffect } from "react";
import Editor from "./editor"
export const scope = "app.containers.playground";

export default function Playground() {
  const [bgTheme, setBgTheme] = useState("dark-mode");
  const [html, setHtml] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(html)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html])


  return (
    <div className={`content-wrapper ${bgTheme}`}>
      <div className="content row">
        <div className="col-12-xl col-lg">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <iframe
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            style={{ backgroundColor: "#ffffff" }}
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
