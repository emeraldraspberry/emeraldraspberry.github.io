import m from "mithril";
import App from "./App.js";
import Home from "./views/Home.js";

import "./styles.scss";

let root = document.body;
m.mount(root, App);

m.route(root.querySelector("#router"), "/home", {
  "/home": Home,
});
