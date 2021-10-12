"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
describe("Initial test", () => {
    test("A test", () => {
        const x = (0, server_1.server)();
        expect(x).toBe(true);
    });
});
