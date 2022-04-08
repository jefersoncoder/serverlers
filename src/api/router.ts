import express from 'express';
import main from './main/router';

class Router {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routers()
    }

    private routers () {
        this.router.use('/',main);
    }
}

const { router } = new Router();
export default router;