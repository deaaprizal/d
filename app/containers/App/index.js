import React from "react";
import { Switch, Route } from "react-router-dom";
import "./global.css"
import DefaultPage from "../C/DefaultPage/Loadable";
import AboutPage from "../C/AboutPage/Loadable";
import FrontendPage from "../D/FrontendPage/Loadable";
import BackendPage from "../D/BackendPage/Loadable";
import PlaygroundPage from "../D/PlaygroundPage/Loadable";
import FavoritePage from "../D/FavoritePage/Loadable";
import NotFoundPage from "../NotFoundPage/Loadable";

import GlobalStyle from "../../global-styles";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/c/about" component={AboutPage} />
        <Route exact path="/d/frontend" component={FrontendPage} />
        <Route exact path="/d/backend" component={BackendPage} />
        <Route exact path="/d/playground" component={PlaygroundPage} />
        <Route exact path="/d/favorite" component={FavoritePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
