const assert = require('assert');
const Room = require ('../room.js');

describe('Room', function() {
    let room;
    beforeEach(function() {
        room = new Room(50, false);
    });
    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 50)
    });

    it('should have a paintedStatus', function() {
        const actual = room.paintedStatus;
        assert.strictEqual(actual, false)
    });
    it('should be able to be painted', function() {
        room.paintRoom();
        const actual = room.paintedStatus;
        assert.strictEqual(actual, true)
    });
});