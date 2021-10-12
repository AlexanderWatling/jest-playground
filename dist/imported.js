"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const dotenv_1 = __importDefault(require("dotenv"));
// import {SignJWT} from "jose/jwt/sign";
// import {generateSecret} from "jose/util/generate_secret";
async function importMe() {
    // const jwt = await new SignJWT({})
    // .setProtectedHeader({alg: "HS256"})
    // .sign(await generateSecret('HS256'));
    const buf1 = buffer_1.Buffer.from("BASIC=basic");
    const config = dotenv_1.default.parse(buf1);
    console.log(config);
    return true;
}
exports.default = importMe;
