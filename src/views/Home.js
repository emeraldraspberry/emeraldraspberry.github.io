import m from "mithril";
import UserRepositories from "../components/UserRepositories.js";

const Home = {
  view: (vnode) => {
    return m("div", { id: "home" }, m("h2", "stuff..."), m(UserRepositories));
  },
};

export default Home;
