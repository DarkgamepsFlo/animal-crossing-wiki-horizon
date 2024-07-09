import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeHome.vue';
import About from '@/components/AboutAbout.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import VotezDewey2 from '@/components/VotezDewey2/VotezDewey2.vue';

import InsectPage from '@/pages/InsectPage/InsectPage.vue';
import FishPage from '@/pages/FishPage/FishPage.vue';
import FossilePage from '@/pages/FossilePage/FossilePage.vue';
import OeuvrePage from '@/pages/OeuvrePage/OeuvrePage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/helloworld', component: HelloWorld },
  {
    path: '/votezdewey2/:chiffre',
    component: VotezDewey2,
    props: route => ({ chiffre: Number(route.params.chiffre) }), // Conversion en nombre
    name: 'VotezDewey2'
  },
  
  { path: '/insect', component: InsectPage },
  { path: '/fish', component: FishPage },
  { path: '/fossile', component: FossilePage },
  { path: '/oeuvre', component: OeuvrePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;