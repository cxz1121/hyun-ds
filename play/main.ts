import {createApp} from 'vue'
import App from './App.vue'
import HyunDs, { HyButton, HyInput } from '../dist/index.es'

console.log(HyunDs);

const app = createApp(App)

// app.use(HyButton)
// app.use(HyInput)

app.use(HyunDs)

app.mount('#app')