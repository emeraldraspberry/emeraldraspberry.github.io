import m from "../_snowpack/pkg/mithril.js";
import App from "./App.js";
import Home from "./views/Home.js";
import Other from "./views/Other.js";

import "./styles.css.proxy.js";

let root = document.body;
m.mount(root, App);

m.route(root.querySelector("#router"), "/home", {
  "/home": () => {
    return Home;
  },
  "/other": () => {
    return Other;
  },
});
