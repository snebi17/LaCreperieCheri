import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './routes/router';
// import Vuetify from 'vuetify';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../public/app.css';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
