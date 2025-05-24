import ButtonPlugin, { VFButton } from './button';

export { VFButton };

export default {
  install(app: import('vue').App) {
    app.use(ButtonPlugin);
  }
};
