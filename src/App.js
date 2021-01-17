import m from "mithril";
import Home from "./views/Home.js";
import Sidebar from "./components/Sidebar";

const App = {
  view: (vnode) => {
    return m("div", { id: "app" }, m(Sidebar), m(Home));
  },
};

export default App;
