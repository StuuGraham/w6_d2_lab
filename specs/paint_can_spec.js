const assert = require('assert')
const PaintCan = require('../paint_can.js')

describe('PaintCan', function() {
    let paintCan;

    beforeEach( function() {
        paintCan = new PaintCan(10);
    })

    it('should have a number of litres', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 10)
    });

    it('should be able to empty itself', function() {
        paintCan.empty();
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0)
    })

    it('should be able to check if its empty', function() {
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false)
    })
})


// - have a number of litres of paint
// - be able to check if it is empty
// - be able to empty itself of paint