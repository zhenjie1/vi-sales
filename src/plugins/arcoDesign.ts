import { App } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

export default function UseArcoDesign(app: App<Element>) {
  app.use(ArcoVue)
}
