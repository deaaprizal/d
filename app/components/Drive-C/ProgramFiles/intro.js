import React from "react";
export const scope = "app.component.home.program-file]";
const halfmoon = require("halfmoon");

export default function Intro() {
  return (
    <div className="card" style={{ padding: 15 }}>
      <nav aria-label="Breadcrumb navigation example">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#"   onClick={() => halfmoon.toggleSidebar()}>
              Drive C
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Program Files</a>
          </li>
        </ul>
      </nav>
      <h3 className="text-center">Deacourse 🎉</h3>
      <hr />
      <p>
        Belajar teknologi & koding bareng <strong>Dea Afrizal</strong> di
        <strong className="text-secondary"> Deacourse</strong> dengan metode
        pembelajaran yang
        <i> fun, beginner friendly, blak-blakan, langsung ke inti utama.</i>
        <br />
        <br />
        Dan tentu sebagai bekal masa depan kalian karena materi yang diberikan
        relevan seperti apa yang ada di dunia kerja IT saat ini.{" "}
        {/* <span
          className="badge badge-primary mb-10"
          onClick={() => (window.location.href = "/c/about")}
        >
          Detail Lebih Lengkap
        </span> */}
      </p>
      <div
        className="alert alert-primary row m-auto filled-dm w-full mw-full"
        role="alert"
      >
        <div className="col-sm-2 d-flex justify-content-center my-auto">
          <div className="w-50 h-50 d-flex align-items-center rounded-circle bg-secondary">
            <div className="m-auto">
              <span className="font-size-24">💡</span>
            </div>
          </div>
        </div>
        <div className="col-sm-9 offset-sm-1 py-10">
          <h4 className="alert-heading">Tips: memilih level pembelajaran</h4>
          <small>
            Untuk kamu yang baru mulai tertarik dunia coding, bisa mulai
            mengikuti sesi yang tersedia di <b>Level 1</b>
          </small>
        </div>
      </div>
    </div>
  );
}
