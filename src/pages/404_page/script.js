import { footer } from "../../components/footer";
import { header } from "../../components/header";

header()
footer()



import { routes } from "./routes.js";

const app = document.getElementById("app");

export async function router() {
  const currentPath = window.location.pathname;

  const matchedRoute = routes.find((route) => route.path.test(currentPath));
  if (matchedRoute) {
    await matchedRoute.view(app);
    if (matchedRoute.loadStyles) await matchedRoute.loadStyles();
    if (matchedRoute.loadScripts) await matchedRoute.loadScripts();
  } else {
    const notFoundRoute = routes.find((route) => route.path.test("/404_page"));
    if (notFoundRoute) {
      history.replaceState(null, null, "/404_page");
      await notFoundRoute.view(app);
      if (notFoundRoute.loadStyles) await notFoundRoute.loadStyles();
      if (notFoundRoute.loadScripts) await notFoundRoute.loadScripts();}
  }
}

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);

export function navigateTo(path) {
  history.pushState(null, null, path);
  router();
}
