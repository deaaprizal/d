import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaPhone, FaTimes } from "react-icons/fa";

export default function ModalLogin() {
  const [modal, setModal] = useState(false)
  const [type, setType] = useState('password')



  return (
    <>
      {modal ?
        <div className="main-modal">
          <div className="body-modal row">
            <div className="icon cursor-pointer">
              <FaTimes size={20} style={{ paddingBottom: 3 }} onClick={() => setModal(false)} />
            </div>
            <div className="col-12 col-md-6 p-10">
              <h4>LOGIN</h4>
              <div className="row text-left">
                <div className="col-12 float-left mb-10 px-10">
                  <div className="position-relative">
                    <FaPhone className="position-absolute" style={{ top: 17, left: 17, color: '#7646ff', transform: 'rotate(90deg)' }} />
                    <input
                      autoFocus
                      required
                      type="number"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      placeholder="Nomor HP"
                      onChange={(e) => ChangeInput("phone", e)}
                      style={{ height: 50, borderRadius: 8, paddingLeft: 40 }}
                      onKeyDown={(e) => e.keyCode === 13 ? (
                        login(),
                        e.target.value = ""
                      ) : null}
                    />
                  </div>
                </div>
                <div className="col-12 float-left mb-10 px-10">
                  <div className="position-relative">
                    <FaLock style={{ position: "absolute", top: 17, left: 17, color: '#7646ff' }} />
                    <input
                      type={type}
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      style={{ height: 50, borderRadius: 8, paddingLeft: 40 }}
                      onChange={(e) => ChangeInput("password", e)}
                      onKeyDown={(e) => e.keyCode === 13 ? (
                        login(),
                        e.target.value = ""
                      ) : null}
                    />
                    <div className="see-password">
                      {type === "password" ?
                        <FaEye style={{ cursor: "pointer", position: "absolute", top: 17, right: 17, color: '#7646ff' }} onClick={() => setType('text')} />
                        :
                        <FaEyeSlash style={{ cursor: "pointer", position: "absolute", top: 17, right: 17, color: '#7646ff' }} onClick={() => setType('password')} />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-12 p-10">
                  <p className="my-5 small">Lupa Password ?</p>
                  <p className="primary-btn">Masuk</p>
                  <p className="my-5 text-center small">Belum punya akun?
                    <span className="small font-weight-bold mx-5">Daftar</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-md-block">
              <img src="/f921bee4ae4954505bf72520792d099c.jpg" alt="banner-login" width="100%" height="100%" />
            </div>
          </div>
        </div> :
        null
      }
      <span className="navbar-text ml-auto" onClick={() => setModal(!modal)}>🙋‍♂️</span>
    </>
  );
}
