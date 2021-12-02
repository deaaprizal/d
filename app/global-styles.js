import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Montserrat,sans-serif;
  }

  body.fontLoaded {
    ffont-family: Montserrat,sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
   font-family: Montserrat,sans-serif;
    line-height: 1.5em;
  }

  .primary-color {
    color:rgba(12,4,87,0.8);
  }

  .primary-bg-color{
    background-color: rgba(12,4,87,0.8);
  }

  .second-bg-color{
    background-color: #ffff;
  }

  .dark-bg-color{
    background-color: rgb(25,28,32) !important;
  }

  .light-bg-color{
    background-color: #ffff
  }

  .small{
    font-size: 12px;
  }

  .input-login{
    height: 50px !important;
    border-radius: 8px !important;
    padding-left: 40px !important;
  }

  .icon-input{
    top: 17px;
    left: 17px;
    position: absolute;
  }

  .otp-input{
    width: 29px !important;
    margin: 5px !important;
    height: 43px !important;
    padding: 12px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .icon-trasform.90{
    transform: rotate(90deg);
  }

  .icon-r-style{
    cursor: pointer;
    position: absolute;
    top: 17px;
    right: 17px;
  }

  .icon-close{
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;

  }

  .line-style{
    padding: 0;
    margin: 24px 0px;
    height: 3px;
    position: relative;
  }
  
  .or-style{
    text-align: center;
    background: white;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    padding: 8px;
    border-radius: 100%;
    font-weight: bold;
  }
  }
`;

export default GlobalStyle;
