export * from "./components/index";
import * as components from "./components"
import type {App} from "vue";

const install = (app: App) => {
    for (const key in components) {
        const component = components[key as keyof typeof components]
        if (component.install) {
            app.use(component)
        }
    }
}

export default {
    install
}
