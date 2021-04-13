import Vue from 'vue'
import Router from 'vue-router'
import AppShell from '@/components/AppShell.vue'

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect: function (to) {
        return 'load';
      }
    },
    { path: '/load/:specUrl?', name: 'load', component: AppShell },
    { path: '/reload', name: 'reload', component: AppShell },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/load")) {
    if (!to.params.specUrl) {
      let specUrl = "";
      specUrl = "openapi.json";
      router.push(`/load/${encodeURIComponent(specUrl)}`)
    }
  }
  next();

});

export default router;