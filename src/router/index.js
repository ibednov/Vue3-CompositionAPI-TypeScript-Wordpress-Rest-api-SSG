import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

//router file
const routes = [
  {
    path: "/",
    name: "Home",
    component: defineAsyncComponent(() =>
      import("@/components/views/pages/HomePage.vue")
    ),
    meta: {
      title: "Alebednov.work / home",
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: defineAsyncComponent(() =>
      import("@/components/views/pages/ContactsPage.vue")
    ),
    meta: {
      title: "Contacts",
    },
  },
  {
    path: "/posts",
    name: "AllPosts",
    component: defineAsyncComponent(() =>
      import("@/components/views/posts/PostsAll.vue")
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
      import("@/components/views/posts/PostsDisplay/PostFull.vue")
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
      import("@/components/views/team/TeamPage.vue")
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
      import("@/components/views/team/TeamDisplay/TeamFull.vue")
    ),
    props: true,
    meta: {
      title: "TeamFull",
    },
  },
  {
    path: "/category/:cat",
    component: defineAsyncComponent(() =>
      import("@/components/views/posts/PostsByCategory.vue")
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
      import("@/components/views/pages/ErrorPage.vue")
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
