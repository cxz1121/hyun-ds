import {createApp} from 'vue'
import App from './App.vue'
// import HyunDs, { HyButton, HyInput } from '../dist/index.es'

// import HyunDs  from '@hyun-ds/hyun-ds';
import { HyButton, HyInput } from '@hyun-ds/hyun-ds'

// console.log(HyunDs);
console.log( HyButton, HyInput );

const app = createApp(App)

app.use(HyButton)
app.use(HyInput)

// app.use(HyunDs)

app.mount('#app')