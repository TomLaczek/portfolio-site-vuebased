import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue"
import NotFoundComponent from "../views/NotFoundComponent.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "projects",
    component:Projects
  },
  {
    path:"/contact",
    name:"contact",
    component:()=>
    import(/*webpackChunkName: "contact */"../views/Contact.vue")
  },
  {
    path:"/portfolio",
    name:"portfolio",
    component:()=>
    import(/*webpackChunkName: "contact */"../views/Portfolio.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { 
    path: '*',
    name: "404",
    component: NotFoundComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
