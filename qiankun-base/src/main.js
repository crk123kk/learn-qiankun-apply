import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { registerMicroApps, start } from 'qiankun';

const apps = [
  {
    name: 'vueApp',
    // 默认会加载（fetch)这个路径上的资源文件html，解析里面的js动态执行（子应用必须支持跨域）
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue',
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  },
];

registerMicroApps(apps);
start({
  //取消预加载
  prefetch: false,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
