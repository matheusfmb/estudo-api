"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmdRest = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("../config/config");
const router_1 = require("../router");
class CmdRest {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    router() {
        new router_1.Router(this.app);
    }
    middleware() {
        this.app.use(body_parser_1.default.json());
        this.app.use((req, res, next) => {
            console.log(`Request Type: ${req.method}`);
            console.log(`Content Type: ${req.headers["content-type"]}`);
            next();
        });
    }
    server() {
        const server = http_1.default.createServer(this.app);
        server.listen(config_1.PORT, () => {
            console.log(`app-rest is running... at port ${config_1.PORT}`);
        });
    }
}
exports.CmdRest = CmdRest;
