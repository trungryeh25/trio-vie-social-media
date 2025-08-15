"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const status_1 = require("@shared/constants/status");
const common_1 = require("@nestjs/common");
console.log(status_1.USER_STATUS.ACTIVE);
const demoUser = {
    id: 'abc',
    name: 'Trio Backend',
    email: 'be@triovie.com',
};
console.log(demoUser);
let AppController = class AppController {
    getHello() {
        return 'Hello World!';
    }
    getUser() {
        return demoUser;
    }
};
exports.AppController = AppController;
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map