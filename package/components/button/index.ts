import Button from './Button.vue';
import type { ButtonProps, ButtonEmits } from './types';

// 导出带前缀的组件名称
export { Button as VFButton };
export type { ButtonProps, ButtonEmits };

export default {
  install(app: import('vue').App) {
    app.component('VFButton', Button);
  }
};
