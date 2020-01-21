
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

const rootId = document.getElementById("rootD");

ReactDOM.render(<App/>, rootId);

serviceWorker.unregister();
if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./App.jsx", () => {
      const NextApp = require("./App.jsx").default;
      ReactDOM.render(<App/>, rootId);
    });
}

/*
import React from "react";
import ReactDOM from "react-dom";
import LoadableApp from "./LoadableApp";
import * as serviceWorker from "./serviceWorker";

const rootId = document.getElementById("root");

ReactDOM.render(<LoadableApp/>, rootId);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./LoadableApp", () => {
    const NextApp = require("./LoadableApp").default;
    ReactDOM.render(<LoadableApp/>, rootId);
  });
}*/
