const assert = require("assert");
const async_fun = require("../async");

describe("async test", () => {
    it("async function should return 7", async() => {
        let r = await async_fun();
        assert.strictEqual(r, 7);
    })
})