import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Editor from "./editor"
export const scope = "app.containers.playground";

export default function Playground() {
  const [css, setCss] = useState("material");
  const [html, setHtml] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  const ListCss = ["material","dracula","moxer","twilight","abbott"]

  const RunCode = () => {
    setSrcDoc(html)
  }

  const ClearCode = () => {
    setSrcDoc("")
    setHtml("")
  }

  return (
    <div className={`content-wrapper sidebar`}>
      <div className="content row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6-xl col-lg">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn" type="button" onClick={ () => RunCode() }><FaPlay size="18"/></button>
                <button className="btn" type="button" onClick={ () => ClearCode() }><MdDelete size="20"/></button>
                <select className="form-control" onChange={ (e) => setCss(e.target.value) }>
                  { ListCss.map( (css,i) => {
                      return (
                        <option value={css} key={i}>{css}</option>
                      )
                    }) 
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-6-xs col-lg">
              <Editor
                language="xml"
                value={html}
                theme={css}
                onChange={setHtml}
              />
            </div>
            <div className="col-6-xs col-lg">
              <iframe
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                style={{ backgroundColor: "#808080" }}
                srcDoc={srcDoc}
                title="output"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
