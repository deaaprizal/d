import React from "react";
export const scope = "app.containers.defaultpage";

//main routes: showing default component
export default function MisteryBox() {
  return (
    <div className="modal" id="mistery-box" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <p className="text-center">
            🤖 <i> mistery box succesfully!</i> 🤖
          </p>
          <h6 style={{ marginBottom: 15 }}>
            Coba tebak, kapan pertama kali puskesmas ditemukan?
          </h6>
          <select className="form-control" id="select-1" defaultValue={3}>
            <option value={1}>abad 1 sebelum masehi</option>
            <option value={2}>tanggal 11 januari</option>
            <option value={3}>tahun 1945</option>
          </select>
          <button
            className="btn btn-primary mt-10 w-full"
            onClick={() => {
              alert("sa ae lu ah! 👋");
              window.location.href = "https://deacourse.com";
            }}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
