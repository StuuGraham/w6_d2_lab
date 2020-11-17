const assert = require('assert');
const Decorator = require ('../decorator.js');
const Room = require ('../room.js');
const PaintCan = require ('../paint_can.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator([])
    });
    it('start with an empty paint stock', function() {
        const actual = decorator.paintStock.length;
        assert.deepStrictEqual(actual, 0)
    });
    it('should be able to add a can of paint to paint stock', function() {
        let paintCan = new PaintCan(10)
        decorator.addPaintCan(paintCan);
        const actual = decorator.paintStock.length;
        assert.deepStrictEqual(actual, 1);
    });
    it('be able to calculate total litres paint it has in stock', function() {
        let paintCan = new PaintCan(10)
        decorator.addPaintCan(paintCan);
        const actual = decorator.countStock();
        assert.strictEqual(actual, 10);
    });
    it('be able to calculate whether is has enough paint to paint a room', function() {
        let paintCan = new PaintCan(10);
        let room = new Room(50, false);
        decorator.addPaintCan(paintCan);
        const actual = decorator.canPaintRoom(room);
        assert.strictEqual(actual, false);
    });
    it('be able to calculate whether is has enough paint to paint a room 2', function() {
        let paintCan = new PaintCan(10);
        let room = new Room(8, false);
        decorator.addPaintCan(paintCan);
        const actual = decorator.canPaintRoom(room);
        assert.strictEqual(actual, true);
    });
    it('be able to paint room if has enough paint in stock', function() {
        let paintCan = new PaintCan(10);
        let room = new Room(20, false);
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        decorator.paintRoom(room);
        const actual = room.paintedStatus
        assert.strictEqual(actual, true);
    });
});

// start with an empty paint stock √√√√
// be able to add a can of paint to paint stock√√√√
// be able to calculate total litres paint it has in stock √√√
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock