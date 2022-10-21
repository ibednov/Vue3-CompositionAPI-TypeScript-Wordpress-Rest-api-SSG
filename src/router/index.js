import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/pages/HomePage.vue'
import Contacts from '../views/pages/ContactsPage.vue'
import PostSingle from '../components/post/PostSingle.vue'

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
        name: "PostSingle",
        component: PostSingle,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
