import type {App} from "vue";
import * as components from "./components"

export {VfProvider, VfButton, VfToggleSwitch} from "./components"
export * from "./components/index"
export * from "./theme/index"

/**
 * 为所有 vue-fluent-ui 组件提供安装函数。
 * @param {App} app Vue 应用实例
 */
const install = (app: App) => {
    for (const key in components) {
        const component = components[key as keyof typeof components]
        if (component.install) {
            app.use(component)
        }
    }
}

// noinspection JSUnusedGlobalSymbols
export default {
    install
}
