import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "*", name: "home", component: ComponenteDefoult, alias: "/" },
    { path: "/", name: "home", component: HomeView, alias: "/other-home" },
    { path: "/products", name: "products", component: ProductsView },
    {
      path: "/products/product/:id",
      name: "product",
      component: ProductView,
      props: true
    },
    {
      path: "/not-existing-view",
      name: "not-existing-page",
      redirect: { name: "404" },
    },
    { path: "/404", name: "404", component: () => import("@/views/404.vue") },
  ],
});

// router.beforeEach((from, to) => {
//   console.log(from);
//   console.log(to);
// })

export default router
