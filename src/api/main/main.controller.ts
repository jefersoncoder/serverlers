import { Request, Response } from 'express';
import service from './main.service';

class Controller {
  public async store(request:Request, response:Response) {
    const entity = await service.store();
    response.status(201).send(entity);
  }

  public async index(request:Request, response:Response) {
    const entity = await service.index();
    response.status(200).send(entity);
  }

  public async show(request:Request, response:Response) {
    const entity = await service.show();
    response.status(200).send(entity);
  }

  public async edit(request:Request, response:Response) {
    const entity = await service.edit();
    response.status(200).send(entity);
  }

  public async destroy(request:Request, response:Response) {
    const entity = await service.destroy();
    response.status(200).send(entity);
  }
}

const controler = new Controller();
export default controler;
