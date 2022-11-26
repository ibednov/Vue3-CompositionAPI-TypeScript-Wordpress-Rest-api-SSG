import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

//router file
const routes = [
  {
    path: "/",
    name: "Home",
    component: defineAsyncComponent(() =>
      import("../views/pages/HomePage.vue")
    ),
    meta: {
      title: "Alebednov.work / home",
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: defineAsyncComponent(() =>
      import("../views/pages/ContactsPage.vue")
    ),
    meta: {
      title: "Contacts",
    },
  },
  {
    path: "/posts",
    name: "AllPosts",
    component: defineAsyncComponent(() =>
      import("../views/pages/AllPosts.vue")
    ),
    props: true,
    meta: {
      title: "AllPosts",
    },
  },
  {
    path: "/posts/:id",
    name: "PostFull",
    component: defineAsyncComponent(() =>
      import("../layouts/posts/PostFull.vue")
    ),
    props: true,
    meta: {
      title: "PostFull",
    },
  },
  {
    path: "/team",
    name: "TeamPage",
    component: defineAsyncComponent(() =>
      import("../views/pages/TeamPage.vue")
    ),
    props: true,
    meta: {
      title: "TeamPage",
    },
  },
  {
    path: "/team/:id",
    name: "TeamFull",
    component: defineAsyncComponent(() =>
      import("../layouts/team/TeamFull.vue")
    ),
    props: true,
    meta: {
      title: "TeamFull",
    },
  },
  {
    path: "/category/:cat",
    component: defineAsyncComponent(() =>
      import("../views/pages/CategoryById.vue")
    ),
    name: "CategoryById",
    props: true,
    meta: {
      title: "Category by id",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 not found",
    component: defineAsyncComponent(() =>
      import("../views/pages/NotFound.vue")
    ),
    meta: {
      title: "404 Not found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
