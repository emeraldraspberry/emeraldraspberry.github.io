import m from "../../_snowpack/pkg/mithril.js";
import UserRepositories from "../components/UserRepositories.js";

const Home = {
  view: (vnode) => {
    return m("div", { id: "home" }, m("h2", "stuff..."), m(UserRepositories));
  },
};

export default Home;
