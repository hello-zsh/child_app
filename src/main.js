// import('./bootstrap')

import './public-path'
import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'

Vue.config.productionTip = false

Vue.use(ViewUI);

let instance = null

const render = (props) => {
  const { container } = props || {};
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

//独立运行时
if(!window.__POWERED_BY_QIANKUN__) {
  render()
}

// qiankun相关
export async function bootstrap() {
  console.log('child1 app bootstraped')
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

export async function update() {
  console.log('child1 app update')
}
