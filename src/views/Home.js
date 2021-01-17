import m from "mithril";
import UserRepositories from "../components/UserRepositories.js";

const Home = {
  view: (vnode) => {
    return m(
      "div",
      { id: "home" },
      m("h2", "Stuff I do on GitHub"),
      m(UserRepositories)
    );
  },
};

export default Home;
