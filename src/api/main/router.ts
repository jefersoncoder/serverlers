import express from 'express';
import controler from './main.controller';

class Router {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routers();
  }

  private routers() {
    this.router.post('/', controler.store);
    this.router.get('/', controler.index);
    this.router.get('/:id', controler.show);
    this.router.patch('/:id', controler.edit);
    this.router.delete('/:id', controler.destroy);
  }
}

const { router } = new Router();
export default router;
