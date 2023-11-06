const routes = [
  {
    path: "/harsh",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "AboutMe",
        component: () => import("pages/AAboutMe.vue"),
      },
      {
        path: "Hobbies",
        component: () => import("pages/Hobbies.vue"),
      },
      {
        path: "Food",
        component: () => import("pages/FavFood.vue"),
      },
      {
        path: "Achmnt",
        component: () => import("pages/Achmnt.vue"),
      },
      {
        path: "Educatio_n",
        component: () => import("pages/Educatio_n.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
