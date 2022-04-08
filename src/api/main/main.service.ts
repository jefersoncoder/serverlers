class Service {
  public async store() {
    return 'main/store';
  }

  public async index() {
    return 'main/index';
  }

  public async show() {
    return 'main/show';
  }

  public async edit() {
    return 'main/edit';
  }

  public async destroy() {
    return 'main/destroy';
  }
}

const service = new Service();
export default service;
