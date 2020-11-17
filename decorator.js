const PaintCan = require ('./paint_can.js');

const Decorator = function(paintStock) {
    this.paintStock = [];
}

Decorator.prototype.addPaintCan = function(paintCan) {
    this.paintStock.push(paintCan);
}

Decorator.prototype.countStock = function() {
    let paintCount = 0;
    for(paintCan of this.paintStock) {
        paintCount += paintCan['litres'];
    }
    return paintCount;
}

Decorator.prototype.canPaintRoom = function(room) {
    let paintAmount = this.countStock();
    if(paintAmount >= room['area']) {
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(room) {
    if (this.canPaintRoom(room)) {
        
    }
}

module.exports = Decorator;


// - start with an empty paint stock
// - be able to add a can of paint to paint stock
// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock