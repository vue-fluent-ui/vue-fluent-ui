import Provider from "./src/Provider.vue";
import {withInstall} from "@utils/install.ts";

export const VfProvider = withInstall(Provider);
export * from "./src/Provider";