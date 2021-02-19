import { createApp, defineAsyncComponent } from 'vue';
import { store, key } from './store';
import router from './router';
import App from './App';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { GlobalConfig } from './config';

const app = createApp(App);
app.use(ElementPlus);
app.use(store, key);
app.use(router);
for (const key in GlobalConfig) {
  GlobalConfig[key].map(item => {
    let componentRoot = defineAsyncComponent(
      () => import(`./components/${key}/${item.name}/index.tsx`)
    );
    app.component(item.name, componentRoot);
  });
}
console.log(app);
app.mount('#app');
