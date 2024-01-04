"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controller/user");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get('/teste', new user_1.testeController().teste);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
