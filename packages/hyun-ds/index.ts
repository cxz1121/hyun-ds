import { App } from "vue";
import HyButton from "../components/hy-button";
import HyInput from "../components/hy-input"

const defaultComponents = [
  HyButton,
  HyInput
]

export { HyButton, HyInput }

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