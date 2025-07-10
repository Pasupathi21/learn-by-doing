"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MockService {
    getUserData() {
        return Promise.resolve({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
            isMock: true,
        });
    }
}
class ActualService {
    getUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
            return response.json();
        });
    }
}
class MainService {
    constructor(service) {
        this.service = service;
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getUserData();
        });
    }
}
// call service base on flag
const service = false ? MockService : ActualService;
const mainService = new MainService(new service);
mainService.getData().then(r => console.log(r));
