import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaPhone, FaTimes } from "react-icons/fa";
import GoogleLogin from 'react-google-login';

export default function ModalLogin() {
  const [type, setType] = useState('password')

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <div className="modal bd-example-modal-lg" id="loginView" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content row">
            <div className="col-12 text-center">
              <h4 className="">LOGIN</h4>
              <div className="row text-left">
                <div className="col-12 float-left mb-10 px-10">
                  <div className="position-relative">
                    <FaPhone className="position-absolute faIcon-style" />
                    <input
                      autoFocus
                      required
                      type="number"
                      aria-describedby="basic-addon1"
                      className="form-control input-login"
                      placeholder="Nomor HP"
                      onChange={(e) => ChangeInput("phone", e)}
                      onKeyDown={(e) => e.keyCode === 13 ? (
                        login(),
                        e.target.value = ""
                      ) : null}
                    />
                  </div>
                </div>
                <div className="col-12 float-left mb-10 px-10">
                  <div className="position-relative">
                    <FaLock className="FaLock-style" />
                    <input
                      type={type}
                      className="form-control input-login"
                      placeholder="Password"
                      aria-label="Password"
                      onChange={(e) => ChangeInput("password", e)}
                      onKeyDown={(e) => e.keyCode === 13 ? (
                        login(),
                        e.target.value = ""
                      ) : null}
                    />
                    <div className="see-password">
                      {type === "password" ?
                        <FaEye className="FaEye-style" onClick={() => setType('text')} />
                        :
                        <FaEyeSlash className="FaEye-style" onClick={() => setType('password')} />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-12 p-10 mt-15">
                  <p className="my-5 small">Lupa Password ?</p>
                  <p className="primary-btn my-10">Masuk</p>
                  <a href="#" style={{textDecoration: 'none'}}><p className="second-btn my-10">Kembali</p></a>
                  <p className="my-5 text-center small">Belum punya akun?
                    <span className="small font-weight-bold mx-5">Daftar</span>
                  </p>
                  <div className="text-center">
                    <GoogleLogin
                      clientId="60527082281-l9hb3hjgcpe48v78p86ak9pg2aucfann.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
