import m from "mithril";
import App from "./App.js";
import Home from "./views/Home.js";
import Other from "./views/Other";

import "./styles.scss";

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
