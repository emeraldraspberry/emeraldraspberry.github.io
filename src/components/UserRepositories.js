import m from "mithril";
import UserRepository from "./UserRepository.js";

const UserRepositories = {
  repositories: [],
  loadRepositories: () => {
    return m
      .request({
        method: "GET",
        url: "https://api.github.com/users/emeraldraspberry/repos",
      })
      .then((data) => {
        UserRepositories.repositories = data;
      });
  },
  view: (vnode) => {
    return m(
      "div",
      { id: "user-repositories" },
      UserRepositories.repositories.map((repo) => {
        console.log(repo);
        return m(UserRepository, {
          name: repo.name,
          htmlUrl: repo.html_url,
          description: repo.description,
          fork: repo.fork,
          language: repo.language,
        });
      })
    );
  },
  oninit: (vnode) => {
    UserRepositories.loadRepositories();
  },
};

export default UserRepositories;
