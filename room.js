const Room = function(area, paintedStatus) {
    this.area = area;
    this.paintedStatus = paintedStatus;
}

Room.prototype.paintRoom = function() {
    this.paintedStatus = true;
}

module.exports = Room;