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

  .icon-input{
    top: 17px;
    left: 17px;
    position: absolute;
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
