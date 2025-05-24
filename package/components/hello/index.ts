import Hello from "./hello.vue";
import type {App} from "vue";
Hello.install = (app:App) =>{
    app.component(Hello.name, Hello)
}
export default Hello