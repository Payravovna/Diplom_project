export const routes = [
  {
    path: /^\/$/,
    view: async (app) => {
      const response = await fetch("src/pages/home/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/home/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/home/script.js"),
  },
  {
    path: /^\/signin$/,
    view: async (app) => {
      const response = await fetch("src/pages/signin/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/signin/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/signin/script.js"),
  },
  {
      path: /^\/signup$/,
      view: async (app) => {
        const response = await fetch("src/pages/signup/index.html");
        const html = await response.text();
        app.innerHTML = html;
      },
      loadStyles: () =>
        import("../pages/signup/style.css", { assert: { type: "css" } }),
      loadScripts: () => import("../pages/signup/script.js"),
    },
    {
      path: /^\/profile$/,
      view: async (app) => {
        const response = await fetch("src/pages/profile/index.html");
        const html = await response.text();
        app.innerHTML = html;
      },
      loadStyles: () =>
        import("../pages/profile/style.css", { assert: { type: "css" } }),
      loadScripts: () => import("../pages/profile/script.js"),
    },
    {
      path: /^\/movie$/,
      view: async (app) => {
        const response = await fetch("src/pages/movie/index.html");
        const html = await response.text();
        app.innerHTML = html;
      },
      loadStyles: () =>
        import("../pages/movie/style.css", { assert: { type: "css" } }),
      loadScripts: () => import("../pages/movie/script.js"),
    },
    {
      path: /^\/actors_profile$/,
      view: async (app) => {
        const response = await fetch("src/pages/actors_profile/index.html");
        const html = await response.text();
        app.innerHTML = html;
      },
      loadStyles: () =>
        import("../pages/actors_profile/style.css", { assert: { type: "css" } }),
      loadScripts: () => import("../pages/actors_profile/script.js"),
    },
    {
      path: /^\/404_page$/,
      view: async (app) => {
        const response = await fetch("src/pages/404_page/index.html");
        const html = await response.text();
        app.innerHTML = html;
      },
      loadStyles: () =>
        import("../pages/404_page/style.css", { assert: { type: "css" } }),
      loadScripts: () => import("../pages/404_page/script.js"),
    },
];