"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cmd = void 0;
const cmd_1 = require("./delivery/rest/cmd/cmd");
class Cmd {
    constructor() {
        this.CMD_REST = 'rest';
    }
    main() {
        this.initDev();
    }
    initDev() {
        process.env['DATABASE_APP_POSTGRESQL_URI'] = 'a definir';
        new cmd_1.CmdRest().server();
    }
}
exports.Cmd = Cmd;
