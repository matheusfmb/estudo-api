"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const user_1 = require("./user");
class Router {
    constructor(app) {
        app.use(new user_1.UserRouter().getRouter());
    }
}
exports.Router = Router;
