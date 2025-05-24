import ButtonPlugin, { Button } from './button';

export { Button };

export default {
  install(app: import('vue').App) {
    app.use(ButtonPlugin);
  }
};
