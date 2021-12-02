import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";

export default function ModalForgetPassword({ halfmoon }) {
  const [phone, setPhone] = useState('')
  const [massage, setMessage] = useState('')
  const [viewType, setViewType] = useState(1)

  const onDarkMode = (type) => {
    let mode = halfmoon.darkModeOn
    if (type == 'text') {
      return !mode ? 'primary-color' : null
    } else if (type == 'bg') {
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
    }
  }

  const send = () => {
    if (phone == "") {
      setMessage("Nomor telepon atau password tidak boleh kosong")
    } else {
      const data = {
        phone: phone,
      }
      setViewType(2)
    }
  }

  const onInputOtp = (e, last) => {
    if (e.target.value.length) {
      document.getElementById(last).focus();
    }
  }

  const inputForgetPassword = () => {
    const box = ['ist', 'sec', 'third', 'fourth', 'fifth']
    return <div className="row" style={{ width: '100%', justifyContent: 'space-evenly' }}>
      {box.map((data, i) =>
        <input
          key={i}
          id={data}
          maxlength="1"
          // autoFocus
          required
          type="number"
          aria-describedby="basic-addon1"
          className="form-control otp-input"
          onClick={() => setMessage('')}
          onChange={(e) => onInputOtp(e, box[i + 1])}
        />
      )}
    </div>
  }

  return (
    <>
      <div className="modal bd-example-modal-lg" id="forgetPassView" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content row">
            <div className="col-12 text-center">
              <h2 className={`${onDarkMode('text')} mb-0`}>
                {viewType == 1 ?
                  'Forget Password?' : 'Verification'
                }
              </h2>
              <h6 className={`${onDarkMode('text')}`} style={{ marginBottom: 50 }}>
                {viewType == 1 ?
                  'Enter your phone number associated with your account' : 'Enter yourverification code we just sent on your phone.'
                }
              </h6>
              <div className="row text-left">
                <div className="col-12 float-left mb-10 px-10">

                  {massage == '' ? null :
                    <div className="alert alert-danger mb-10 p-0" role="alert">
                      <h4 className="alert-heading font-size-12 m-10">{massage}</h4>
                      <span className="icon-close" aria-hidden="true" onClick={() => setMessage('')}>&times;</span>
                    </div>
                  }
                  {viewType == 1 ?
                    <div className="position-relative">
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
                      // onKeyDown={(e) => e.keyCode === 13 ? (
                      //   login(),
                      //   e.target.value = ""
                      // ) : null}
                      />
                    </div> :
                    inputForgetPassword()
                  }
                </div>

                {viewType == 1 ?
                  <div className="col-12 p-10 mt-15">
                    <p className="btn btn-primary btn-block btn-lg my-10" onClick={() => send()}>Send</p>
                    <a href="#" style={{ textDecoration: 'none' }}><p className="btn btn-block btn-lg my-10">Close</p></a>

                    <p className={`${onDarkMode('text')} pt-20 small`}>Belum punya akun?
                      <a href={"#registerView"} style={{ textDecoration: 'none' }}><span className="small font-weight-bold mx-5">Daftar</span></a>
                    </p>
                  </div> :
                  <div className="col-12 p-10 mt-15">
                    <p className={`${onDarkMode('text')} pt-20 small`}>if you didn't receve a code!
                      <a style={{ textDecoration: 'none' }}><span className="small font-weight-bold mx-5">Resend</span></a>
                    </p>

                    <p className="btn btn-primary btn-block btn-lg my-10" onClick={() => send()}>Verify</p>
                    <a href="#" style={{ textDecoration: 'none' }}><p className="btn btn-block btn-lg my-10">Close</p></a>
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
