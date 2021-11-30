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

  .primary-btn{
    background-color: rgba(12,4,87,0.8);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    color: white !important;
    padding: 12px;
    text-align: center;
    cursor: pointer;
  }

  .second-btn{
    border: 3px solid rgba(12,4,87,0.8);
    border-radius: 8px;
    color: rgba(12,4,87,0.8) !important;
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }

  .small{
    font-size: 12px;
  }

  .input-login{
    height: 50px !important;
    border-radius: 8px !important;
    padding-left: 40px !important;
  }

  .faIcon-style{
    color:rgba(12,4,87,0.8);
    top: 17px;
    left: 17px;
    transform: rotate(90deg);
  }

  .FaLock-style{
    color: rgba(12,4,87,0.8);
    position: absolute;
    top: 17px;
    left: 17px;
  }

  .FaEye-style{
    color: rgba(12,4,87,0.8);
    cursor: pointer;
    position: absolute;
    top: 17px;
    right: 17px;
  }
`;

export default GlobalStyle;
