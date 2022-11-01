import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/HomePage.vue";
import Contacts from "../views/pages/ContactsPage.vue";
import PostFull from "../layouts/posts/PostFull.vue";
import AllPosts from "../views/pages/AllPosts.vue";
import TeamPage from "../views/pages/TeamPage.vue";
import TeamFull from "../layouts/team/TeamFull.vue";
import CategoryById from "../views/pages/CategoryById.vue";
import NotFound from "../views/pages/NotFound.vue";

//router file
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      title: "Contacts",
    },
  },
  {
    path: "/posts",
    name: "AllPosts",
    component: AllPosts,
    props: true,
    meta: {
      title: "AllPosts",
    },
  },
  {
    path: "/posts/:id",
    name: "PostFull",
    component: PostFull,
    props: true,
    meta: {
      title: "PostFull",
    },
  },
  {
    path: "/team",
    name: "TeamPage",
    component: TeamPage,
    props: true,
    meta: {
      title: "TeamPage",
    },
  },
  {
    path: "/team/:id",
    name: "TeamFull",
    component: TeamFull,
    props: true,
    meta: {
      title: "TeamFull",
    },
  },
  {
    path: "/category/:cat",
    component: CategoryById,
    name: "CategoryById",
    props: true,
    meta: {
      title: "Category by id",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 not found",
    component: NotFound,
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
