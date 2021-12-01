import React from "react";
export const scope = "app.component.home.program-file]";

export default function Intro() {
  return (
    <div className="card" style={{ padding: 15 }}>
      <h1 className="text-center">🐱‍👤 Deacourse 🐱‍👤</h1>
      <hr/>
      <p className="">
        Belajar teknologi & koding bareng <strong>Dea Afrizal</strong> di Deacourse dengan metode pembelajaran yang
        <i> fun, beginner friendly, blak-blakan, langsung ke inti utama.</i> 
        <br/>
        <button class="btn btn-primary btn-block mt-5" type="button" onClick={() => window.location.href = "/c/about"}>Selengkapnya</button>
        <br/>
        Dan tentu sebagai bekal masa depan kalian karena materi yang diberikan relevan seperti apa yang ada di dunia kerja IT saat ini.
      </p>
      <div class="alert alert-primary row m-auto filled-dm w-full mw-full" role="alert">
        <div class="col-sm-2 d-flex justify-content-center my-auto">
          <div class="w-50 h-50 d-flex align-items-center rounded-circle bg-secondary">
            <div class="m-auto">
              <span class="font-size-24">💡</span>
            </div>
          </div>
        </div>
        <div class="col-sm-9 offset-sm-1 py-10">
          <h4 class="alert-heading">Tips: memilih level pembelajaran</h4>
          Untuk kamu yang baru mulai tertarik dunia coding, bisa mulai mengikuti sesi yang tersedia di <a href="">Level 1</a>
        </div>
      </div>
    </div>
  );
}
