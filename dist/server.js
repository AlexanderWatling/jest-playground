"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const imported_1 = __importDefault(require("./imported"));
async function server() {
    if (await (0, imported_1.default)()) {
        return true;
    }
    else {
        return false;
    }
}
exports.server = server;
server()
    .then((val) => {
    console.log(val);
});
