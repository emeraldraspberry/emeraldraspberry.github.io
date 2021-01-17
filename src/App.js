import m from "../_snowpack/pkg/mithril.js";
import Home from "./views/Home.js";
import Sidebar from "./components/Sidebar.js";

const App = {
  view: (vnode) => {
    return m("div", { id: "app" }, m(Sidebar), m("div", { id: "router" }));
  },
};

export default App;
