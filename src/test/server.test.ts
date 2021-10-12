import {server} from "../server";

describe("Initial test", () => {
    test("A test", async () => {
        const x = await server()
        expect(x).toBe(true);
    })
})