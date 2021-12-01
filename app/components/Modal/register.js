import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaPhone, FaEnvelopeOpen, FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function ModalRegister({ halfmoon }) {
  const [type, setType] = useState('password')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [massage, setMessage] = useState('')

  const onDarkMode = (type) => {
    let mode = halfmoon.darkModeOn
    if(type == 'text'){
      return !mode ? 'primary-color' : null
    }else if(type == 'bg'){
      return !mode ? 'primary-bg-color' : 'second-bg-color'
    }
  }

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
      <div className="modal bd-example-modal-lg" id="registerView" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content row">
            <div className="col-12 text-center">
            <h2 className={`${onDarkMode('text')} mb-0`}>Hi !</h2>
              <h6 className={`${onDarkMode('text')}`} style={{ marginBottom: 50 }}>Create a new account</h6>
              <div className="row text-left">
                <div className="col-12 float-left mb-10 px-10">

                  {massage == '' ? null :
                    <div className="alert alert-danger mb-10 p-0" role="alert">
                      <h4 className="alert-heading font-size-12 m-10">{massage}</h4>
                      <span className="icon-close" aria-hidden="true" onClick={() => setMessage('')}>&times;</span>
                    </div>
                  }

                  <div className="relative">
                    <FaPhone className={`${onDarkMode('text')} icon-input icon-trasform.90`} />
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

                  <div className="relative">
                    <FaEnvelopeOpen className={`${onDarkMode('text')} icon-input`} />
                    <input
                      autoFocus
                      required
                      type="email"
                      aria-describedby="basic-addon1"
                      className="form-control input-login"
                      placeholder="Email"
                      onClick={() => setMessage('')}
                      onChange={(e) => ChangeInput("email", e)}
                      onKeyDown={(e) => e.keyCode === 13 ? (
                        login(),
                        e.target.value = ""
                      ) : null}
                    />
                  </div>
                </div>

                <div className="col-12 float-left mb-10 px-10">
                  <div className="relative">
                    <FaLock className={`${onDarkMode('text')} icon-input`} />
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
                        <FaEye className={`${onDarkMode('text')} icon-r-style pointer-events-auto`} onClick={() => setType('text')} />
                        :
                        <FaEyeSlash className={`${onDarkMode('text')} icon-r-style pointer-events-auto`} onClick={() => setType('password')} />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-12 p-10 mt-15">
                  <p className="btn btn-primary btn-block btn-lg my-10" onClick={() => login()}>Sign Up</p>
                  <a href="#" style={{ textDecoration: 'none' }}><p className="btn btn-block btn-lg my-10">Close</p></a>
                  <div className={`${onDarkMode('bg')} line-style`}>
                    <div className={!halfmoon.darkModeOn ? 'light-bg-color or-style primary-color' : 'dark-bg-color or-style'}>or</div>
                  </div>
                  <p className={`${onDarkMode('text')} medium text-center pt-10 font-weight-bold`}>Social Media Signup</p>
                  <div className="text-center my-20">
                    <span className="px-5"><FaGoogle size="24" /></span>
                    <span className="px-5"><FaFacebook size="24" /></span>
                    <span className="px-5"><FaLinkedin size="24" /></span>
                  </div>
                  <p className={`${onDarkMode('text')} pt-20 small`}>Already have on account?
                    <a href={"#loginView"} style={{ textDecoration: 'none' }}><span className="small font-weight-bold mx-5">Sign in</span></a>
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
