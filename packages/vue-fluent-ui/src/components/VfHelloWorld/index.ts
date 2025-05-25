import HelloWorld from "./src/HelloWorld.vue";
import {withInstall} from "../../utils/install.ts";
// 这里导出
export const VfHelloWorld = withInstall(HelloWorld);
export * from "./src/HelloWorld";
export default VfHelloWorld;
