import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/pages/HomePage.vue'
import Contacts from '../views/pages/ContactsPage.vue'
import PostFull from '../layouts/posts/PostFull.vue'
import TeamPage from '../views/pages/TeamPage.vue'
import TeamFull from '../layouts/team/TeamFull.vue'

//router file
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts
    },
    {
        path: "/posts/:id",
        name: "PostFull",
        component: PostFull,
        props: true
    },
    {
        path: "/team",
        name: "TeamPage",
        component: TeamPage,
        props: true
    },
    {
        path: "/team/:id",
        name: "TeamFull",
        component: TeamFull,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
