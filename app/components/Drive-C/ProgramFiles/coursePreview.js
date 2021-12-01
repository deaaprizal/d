import React, { useState } from "react";
export const scope = "app.component.home.program-file.coursePreview";
const halfmoon = require("halfmoon");
import reactIcon from "../../../images/react.png";
import javascriptIcon from "../../../images/javascript.png";
import webIcon from "../../../images/web.png";

export const coursePreview = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [kota, setKota] = useState("");
  const [gelombang, setGelombang] = useState(1);

  const getNama = (nama) => {
    setNama(nama);
  };
  const getEmail = (email) => {
    setEmail(email);
  };
  const getNomor = (nomor) => {
    setNomor(nomor);
  };
  const getKota = (kota) => {
    setKota(kota);
  };

  const goToWhatsapp = () => {
    if (
      nama.length >= 3 &&
      email !== "" &&
      nomor.length >= 8 &&
      kota.length >= 3
    ) {
      return (window.location.href = `https://api.whatsapp.com/send?phone=+6281285241889&text=Hi%20bang%2C%20daftar%20deacourse%20untuk%20sesi%20react%20js%20fundamental:%0A%0A${nama}%0A${email}%0A${nomor}%0A${kota}%0AGelombang%20${gelombang}`);
    } else {
      alert("isi data dengan lengkap & benar");
    }
  };
  return (
    <div
      className="modal modal-full ie-scroll-fix"
      id="modal-course-preview"
      tabIndex="-1"
      role="dialog"
      data-overlay-dismissal-disabled="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div
            className="text-right font-size-24"
            onClick={() => halfmoon.toggleModal("modal-course-preview")}
          >
            <span>❌</span>
          </div>
          <div className="container" />
          <div className="row">
            <div
              className="col-md-8 offset-md-2 p-15"
              style={{ height: "100%" }}
            >
              <h6 className="badge mb-5">
                COURSE FRONTEND WEB DEVELOPER{" "}
                <a href="#nama">register disini</a>
              </h6>
              <br />
              <i>
                course ini bisa menjadi pegangan awal sebelum kalian masuk ke
                ranah yang profesional sebagai{" "}
                <span className="text-secondary">frontend web developer</span>
              </i>
              <div className="alert alert-primary mt-15" role="alert">
                <h4 className="alert-heading text-center">
                  FUNDAMENTAL REACT JS LIBRARY
                </h4>
                <div className="row">
                  <div className="col-4">
                    <img
                      src={javascriptIcon}
                      width="100"
                      height="100"
                      alt="deacourse course javascript"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={reactIcon}
                      width="100"
                      height="100"
                      alt="deacourse course react js"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={webIcon}
                      width="100"
                      height="100"
                      alt="deacourse course web developer"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-20">
                <h4 className="mb-10">Jadwal Course</h4>
                <details className="collapse-panel">
                  <summary className="collapse-header">
                    <span>📅 4 Desember 2021 (gelombang 1)</span>
                    <br />
                    <span className="text-muted">12:00 WIB - 17:30 WIB</span>
                    <span className="text-muted float-right">Rp. 65.000</span>
                  </summary>
                  <div className="collapse-content p-5">
                    <div>
                      <p className="mb-5">ketentuan:</p>
                      <ol className="m-0 p-0">
                        <li>
                          course dimulai pada tanggal hari sabtu 4 desember jam{" "}
                          <b>12:00 WIB</b> dan selesai pada jam <b>17.30 WIB</b>{" "}
                          dan <b>breaktime</b> ISOMA pukul 15:00 WIB ⌚
                          <br />
                          <br />
                          <a href="#nama">register disini</a>
                        </li>
                        <li>course digelar via ZOOM VIP meeting</li>
                        <li>SLOT COURSE TERBATAS 🔑</li>
                        <li>
                          setelah registrasi & proses pembayaran berhasil
                          divalidasi maka kalian akan di invite ke grup whatsapp
                          khusus course sesi ini. 📞
                        </li>
                        <li>
                          jika kalian terlambat masuk ke ZOOM Meeting &
                          ketinggalan materi, maka itu bukan tanggung jawab gue
                          ya. usahakan disiplin 👌
                        </li>
                        <li>
                          metode pembelajarannya super santai dengan pemahaman
                          dan analogi versi gue sendiri
                        </li>
                        <li>
                          persiapkan laptop atau komputer, koneksi internet dan
                          juga software-software yang mesti di instal (akan di
                          infokan via grup whatsapp khusus)
                        </li>
                        <li>
                          course ini bisa untuk semua usia & kalangan bahkan
                          buat yang belum pernah coding sekalipun (tapi lebih
                          disarankan sudah cukup tau seputar website)
                        </li>
                      </ol>
                    </div>
                  </div>
                </details>
                <details className="collapse-panel">
                  <summary className="collapse-header">
                    <span>📅 5 Desember 2021 (gelombang 2)</span>
                    <br />
                    <span className="text-muted">12:00 WIB - 17:30 WIB</span>
                    <span className="text-muted float-right">Rp. 65.000</span>
                  </summary>
                  <div className="collapse-content p-5 text-center">
                    materi dan ketentuan sama seperti gelombang 1
                  </div>
                </details>
                <details className="collapse-panel" open>
                  <summary className="collapse-header">
                    <strong>Materi Pembelajaran</strong>
                  </summary>
                  <div className="collapse-content p-5">
                    <div>
                      <p className="font-size-16 text-center">
                        Apa Yang Dipelajari
                      </p>
                      <ol className="m-0 p-0">
                        <li>
                          pemahaman konsep dasar javascript menggunakan NODE JS
                        </li>
                        <li>
                          pemahaman <b>konsep dasar</b> library REACT JS
                        </li>
                        <li>
                          <b>instalasi & setup</b> project REACT JS
                        </li>
                        <li>permainan komponen web di REACT JS</li>
                        <li>
                          bergelut dengan <b>state</b> &{" "}
                          <b>component lifecycle</b> di REACT JS
                        </li>
                      </ol>
                    </div>
                    <div>
                      <hr />
                      <p className="font-size-16 text-center">Hasil Akhir</p>
                      <ol className="m-0 p-0">
                        <li>
                          mengenal & memahami <b>intisari</b> dalam pembuatan
                          sebuah website menggunakan react js library
                        </li>
                        <li>merubah mindset tentang javascript</li>
                        <li>bisa setup & running react js secara lokal</li>
                        <li>
                          gratis 1 module project react js yang mudah dimodif
                          sana sini
                        </li>
                      </ol>
                    </div>
                  </div>
                </details>
              </div>
              <br />
              <small>
                course ini adalah modal dasar untuk kalian yang mulai tertarik
                dengan dunia frontend web programming.
              </small>
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="nama" className="required">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control alt-dm m-5"
                  placeholder="contoh: budi dalton"
                  id="nama"
                  onChange={(e) => getNama(e.target.value)}
                />
                <label htmlFor="email" className="required">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control alt-dm m-5"
                  placeholder="contoh: budi@gmail.com"
                  id="email"
                  onChange={(e) => getEmail(e.target.value)}
                />
                <label htmlFor="nomor" className="required">
                  Nomor Whatsapp
                </label>
                <input
                  type="number"
                  className="form-control alt-dm m-5"
                  placeholder="contoh: 082392823"
                  id="nomor"
                  onChange={(e) => getNomor(e.target.value)}
                />
                <label htmlFor="kota" className="required">
                  Asal Kota
                </label>
                <input
                  type="text"
                  className="form-control alt-dm m-5"
                  placeholder="contoh: Jakarta"
                  id="kota"
                  onChange={(e) => getKota(e.target.value)}
                />
                <label htmlFor="gelombang" className="required">
                  pilih tanggal ikut serta:
                </label>
                <br />

                <div className="custom-radio">
                  <input
                    type="radio"
                    name="radio-set-1"
                    id="radio-1"
                    checked="checked"
                    value="1"
                  />
                  <label for="radio-1">4 Desember 2021</label>
                </div>

                <div className="custom-radio">
                  <input
                    type="radio"
                    name="radio-set-1"
                    id="radio-2"
                    value="2"
                    onClick={() => setGelombang(2)}
                  />
                  <label for="radio-2">5 Desember 2021</label>
                </div>

                <div className="text-right">
                  <button
                    className="btn btn-primary"
                    onClick={() => goToWhatsapp()}
                  >
                    daftar sekarang
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
