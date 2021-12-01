import React from "react";
export const scope = "app.component.home.program-file]";

export default function Level() {
  return (
    <div className="row m-card row-eq-spacing-lg row-eq-spacing-lg">
      <div className="col-xs-12 col-lg-3 m-5 m-lg-0">
        <section
          className="card shadow-lg text-center"
          onClick={() => console.log("level 1")}
        >
          <div className="content-title">
            <h2 style={{ marginBottom: -2 }}>LEVEL 1</h2>
            <p className="m-auto">Beginner</p>
            <small className="badge badge-primary">BASIC</small>
          </div>
        </section>
      </div>
      <div className="col-xs-12 col-lg-6 m-5 m-lg-0">
        <div
          className="card text-muted"
          onClick={() => console.log("locked")}
        >
          <div className="content-title text-center">
            <h2 style={{ marginBottom: -2 }}>LEVEL 2</h2>
            <p className="m-auto">Intermediate</p>
            <small className="badge badge-secondary">PRO</small>{" "}
            <div className="text-right">🔐</div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-lg-3 m-5 m-lg-0">
        <div
          className="card mb-0 text-muted"
          onClick={() => console.log("locked")}
        >
          <div className="content-title text-center">
            <h2 style={{ marginBottom: -2 }}>LEVEL 3</h2>
            <p className="m-auto">Advance</p>
            <small className="badge badge-danger">ENTERPRISE</small>
            <div className="text-right">🔐</div>
          </div>
        </div>
      </div>
    </div>
  );
}
