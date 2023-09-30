import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'AppMain',
            component: () => import('./router-view/AppMain.vue')
        },

        {
            path: '/category/:id',
            name: 'StoresShow',
            component: () => import('./router-view/StoresShow.vue')
        },
    ],
});

export { router };