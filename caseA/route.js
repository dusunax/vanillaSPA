const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/main.html",
  "/page1": "/pages/page1.html",
  "/page2": "/pages/page2.html",
  "/error": "/pages/error.html",
};

const handleHashChange = () => {};

const handleLocation = async () => {
  try {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    console.log(path, route);
  } catch (e) {
    console.log(e);

    window.history.pushState({}, "", "/error");
  }
};

window.addEventListener("popstate", handleLocation);
window.route = route;

handleLocation();
