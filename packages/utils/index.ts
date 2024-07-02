import type { Plugin, App } from 'vue'
export const withInstall = (comp) => {
  comp.install = function (Vue: App) {
    Vue.component(comp.name, comp)
  }
  return comp
}
