import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaPhone, FaTimes } from "react-icons/fa";

export default function ModalLogin() {
  const [type, setType] = useState('password')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [massage, setMessage] = useState('')

  const ChangeInput = (input, e) => {
    setMessage('')
    if (input == "phone") {
      let phone_number = e.target.value.toString()
      let getRegion = phone_number.slice(0, 1);
      if (getRegion == '0') {
        phone_number = phone_number.replace(getRegion, '+62');
      } else {
        phone_number = '+62' + e.target.value
      }
      setPhone(phone_number)
    } else {
      setPassword(e.target.value)
    }
  }

  const login = () => {
    if (phone == "" || password == "") {
      setMessage("Nomor telepon atau password tidak boleh kosong")
    } else {
      const data = {
        phone: phone,
        password: password
      }

      console.log("data login ->", data)
    }
  }

  return (
    <>
      <div className="modal bd-example-modal-lg" id="loginView" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content row">
            <div className="col-12 text-center">
              <h2 className="" style={{marginBottom: 50}}>LOGIN</h2>
              <div className="row text-left">
                <div className="col-12 float-left mb-10 px-10">

                  {massage == '' ? null :
                    <div className="alert alert-danger mb-10 p-0" role="alert">
                      <h4 className="alert-heading font-size-12 m-10">{massage}</h4>
                      <span className="icon-close" aria-hidden="true" onClick={() => setMessage('')}>&times;</span>
                    </div>
                  }

                  <div className="position-relative">
                    <FaPhone className="position-absolute faIcon-style" />
                    <input
                      autoFocus
                      required
                      type="number"
                      aria-describedby="basic-addon1"
                      className="form-control input-login"
                      placeholder="Nomor HP"
                      onClick={() => setMessage('')}
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
                      onClick={() => setMessage('')}
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
                  <p className="primary-btn my-10" onClick={() => login()}>Masuk</p>
                  <a href="#" style={{ textDecoration: 'none' }}><p className="second-btn my-10">Kembali</p></a>
                  <p className="my-5 text-center small">Belum punya akun?
                    <span className="small font-weight-bold mx-5">Daftar</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
