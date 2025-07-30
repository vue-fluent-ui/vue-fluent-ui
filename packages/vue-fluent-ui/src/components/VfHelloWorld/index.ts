import HelloWorld from "./src/HelloWorld.vue";
import {withInstall} from "../../utils/install.ts";

// noinspection JSUnusedGlobalSymbols
export const VfHelloWorld = withInstall(HelloWorld);
export * from "./src/HelloWorld";
