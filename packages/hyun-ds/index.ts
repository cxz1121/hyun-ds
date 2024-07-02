import { App } from "vue";

import defaultComponents from "../components";

export { HyButton, HyInput } from '../components'

export default {
  version: '1.0.0',
  isInstall: false,
  install(app: App) {
    if (this.isInstall) return
    defaultComponents.forEach(item => {
      app.use(item)
    })
    this.isInstall = true
  }
}