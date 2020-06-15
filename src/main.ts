import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import ExchangeGlobalMixin from './mixins/exchange-global';

Vue.config.productionTip = false;
Vue.mixin(ExchangeGlobalMixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
