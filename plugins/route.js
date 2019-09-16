// import Bus from '../assets/bus';

export default ({ app }) => {
  app.router.beforeEach((to, from, next)=> {
    next();
  });
}
