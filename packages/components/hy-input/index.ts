import { App } from 'vue'
import HyInput from './index.vue'

export { HyInput }

export default {
  install(app: App) {
    app.component('hy-input', HyInput)
  }
}