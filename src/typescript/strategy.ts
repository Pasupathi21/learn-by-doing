/**
 * 1) Dependency Injection Pattern -> Inject the calss instance into the constructor
 * 2) Strategy Pattern -> Using interface to changes the service
 */

interface IService {
  getUserData(): Promise<any>;
}

class MockService implements IService {
  getUserData(): Promise<any> {
    return Promise.resolve({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
      isMock: true,
    });
  }
}

class ActualService implements IService {
  async getUserData(): Promise<any> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return response.json()
  }
}

class MainService {
  constructor(private service: IService) {}
  async getData() {
    return await this.service.getUserData()
  }
}


// call service base on flag
const service = false ? MockService : ActualService;
const mainService = new MainService(new service);
mainService.getData().then(r => console.log(r))