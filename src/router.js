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

        {
            path: '/store/:id',
            name: 'StoreInfo',
            component: () => import('./router-view/StoreInfo.vue')
        },
    ],
});

export { router };