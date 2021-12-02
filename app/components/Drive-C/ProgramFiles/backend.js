import React from "react";
import backEndDev from "../../../images/bedev.jpg";
export const scope = "app.component.home.journey.frontend";
export default function BackEnd() {
  return (
    <div className="col-6-xl col-lg">
      <div className="mw-full" style={{ width: "90%" }}>
        <div className="card col-sm" style={{ padding: 10 }}>
          <img
            src={backEndDev}
            className="img-fluid rounded-top"
            alt="frontend developer"
          />
          <div className="content">
            <h2 className="content-title">Backend WebDev Guidelines</h2>
            <div>
              <span className="badge ml-5">level: 💥💥💥💥</span>
              <span className="badge">available ✅</span>
            </div>
          </div>
          <hr />
          <div className="content">
            <h2 className="content-title">Tech Stack 🙌</h2>
            <hr />
            <div>
              <strong>JAVASCRIPT</strong>
              <br />
              <code>Node JS, Express JS.</code>
            </div>
            <div style={{ marginTop: 10 }}>
              <strong>PHP</strong>
              <br />
              <code>Lumen.</code>
            </div>
            <div>
              <strong>Python</strong>
              <br />
              <code>Flask.</code>
            </div>
            <hr />
            <div>
              <strong>DATABASE</strong>
              <br />
              <code>MariaDB, MongoDB, PostgreSQL.</code>
            </div>
            <hr />
            <div>
              <strong>LAINNYA</strong>
              <br />
              <code>
                Git management, knowledge of web architecture, API architecture,
                CLI & server integration.
              </code>
            </div>
            <div className="text-center mt-20">
              <button
                className="btn btn-md"
                onClick={() => (window.location.href = "/d/backend")}
              >
                Ikuti Journey Backend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
