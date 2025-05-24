import Button from './Button.vue';
import type { ButtonProps, ButtonEmits } from './types';

export { Button };
export type { ButtonProps, ButtonEmits };

export default {
  install(app: import('vue').App) {
    app.component('FButton', Button);
  }
};
