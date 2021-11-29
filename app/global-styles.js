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

  .main-modal{
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .body-modal{
    width: 500px;
    background: white;
    border-radius: 8px;
    text-align: center;
    position: relative;
    margin-left: 14px;
    margin-right: 14px;
    position: relative;
  }

  .primary-btn{
    background-color: rgb(118, 70, 255);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    color: white !important;
    padding: 12px;
    text-align: center;
  }

  .small{
    font-size: 12px;
  }

  .icon{
    position: absolute;
    background: white;
    padding: 4px;
    right: 0;
    z-index: 1;
    border-radius: 100%;
    margin: 5px;
    cursor: pointer;
    box-shadow: rgb(224 224 224) 0px 0px 5px;
  }
`;

export default GlobalStyle;
