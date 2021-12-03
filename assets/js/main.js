// The main JavaScript file for the Child Flashcards Vue app

// Define our routes
const routes = [
  { path: '/', component: VueCompEntryPage },
  { path: '/num-0-100', component: VueCompNum0100 },
  { path: '/num-tens', component: VueCompNumTens },
  { path: '/letters-upper', component: VueCompLettersUpper },
  { path: '/letters-lower', component: VueCompLettersLower },
  { path: '/colors', component: VueCompColors },
  { path: '/shapes', component: VueCompShapes },
  { path: '/words', component: VueCompWords },
]
// Create our Vue router
const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'hash',  // We use hash b/c to work in GitHub pages. History mode looks better if you can redirect 404 pages.
});

const app = new Vue({
  router,
  data: function () {
      return {};
  },
}).$mount('#app')
