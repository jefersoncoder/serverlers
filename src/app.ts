import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from './api/router';

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors({origin:'*'}));
        this.app.use(morgan('dev'));
        this.app.use(router);
    }
}

const app = new App();
export default app.app;