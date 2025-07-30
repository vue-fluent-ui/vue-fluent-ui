import HelloWorld from "./src/HelloWorld.vue";
import {withInstall} from "../../utils/install.ts";
export const VfHelloWorld = withInstall(HelloWorld);
export * from "./src/HelloWorld";
export default VfHelloWorld;
