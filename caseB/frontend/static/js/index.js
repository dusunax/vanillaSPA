import Main from "../views/Main.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    // { path: "404", view: () => console.log("404 page") },
    { path: "/", view: Main },
    // { path: "/page1", view: () => console.log("page1") },
    // { path: "/page2", view: () => console.log("page2") },
  ];

  const potentialMathes = routes.map((route) => {
    return { route, isMatch: location.pathname === route.path };
  });

  let match = potentialMathes.find((potentialMath) => potentialMath.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: false,
    };
  }

  const view = new match.route.view();

  console.log(view);
  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
