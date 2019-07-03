const assert = require('assert');
const sum = require('../hello');

describe("#hello test", () => {
    describe("sum test", () => {
        it("sum() should return 0", () => {
            assert.strictEqual(sum(), 0);
        })
        it("sum(1,2,3,4) should return 10", () => {
            assert.strictEqual(sum(1,2,3,4), 10);
        })
    })
})