import { App } from 'vue'
import HyButton from './index.vue'

export { HyButton }

export default {
  install(app: App) {
    app.component('hy-button', HyButton)
  }
}