import React from "react";
import webDevImg from "../../../images/webdev.jpg";
export const scope = "app.component.home.journey.frontend";
export default function FrontEnd() {
  return (
    <div className="mw-full" style={{ width: "90%" }}>
      <div className="card p-1 col-sm">
        <img
          src={webDevImg}
          className="img-fluid rounded-top"
          alt="frontend developer"
        />
        <div className="content">
          <h2 className="content-title">FrontEnd WebDev Guidelines</h2>
          <div>
            <span className="badge ml-5">level: 💥💥💥</span>
            <span className="badge">available ✅</span>
          </div>
        </div>
        <hr />
        <div className="content">
          <h2 className="content-title">Tech Stack 🙌</h2>
          <hr />
          <div>
            <strong>CSS</strong>
            <br />
            <code>
              Bootstrap, Materialize, Semantic UI, Pure CSS, Tailwind, Bulma,
              Chakra UI, ANT Design.
            </code>
          </div>
          <hr />
          <div>
            <strong>JAVASCRIPT</strong>
            <br />
            <code>React JS, Next JS & Vue.</code>
          </div>
          <hr />
          <div>
            <strong>LAINNYA</strong>
            <br />
            <code>
              Git repository management, State management, Knowledge of
              website components, Basic knowledge of UIUX, Knowledge of styling CSS native code, Knowledge of responsive structure & Improving design guideline.   
            </code>
          </div>
          <div className="text-center mt-20">
            <button className="btn btn-md">Ikuti Journey Frontend</button>
          </div>
        </div>
      </div>
    </div>
  );
}
