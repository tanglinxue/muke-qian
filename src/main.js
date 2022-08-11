import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons-vue'
import api from './api'



import request from './utils/request'
import storage from './utils/storage'

console.log('环境变量=>',import.meta.env)
const app = createApp(App)
for(let iconName in ElIconModules){
  app.component(iconName,ElIconModules[iconName])
}
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage
console.log(store)
app.use(router).use(store).use(ElementPlus).mount('#app')
