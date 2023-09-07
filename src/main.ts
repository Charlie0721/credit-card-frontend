import { createApp } from 'vue'
import  {createPinia} from 'pinia'
import './style.css'
import router from './router';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
