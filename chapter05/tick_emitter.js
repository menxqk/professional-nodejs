const util = require('util');
const EventEmitter = require('events').EventEmitter;

var Ticker = function () {
    var self = this;
    var count = 0;
    setInterval(function () {
        self.emit('tick', ++count)
    }, 1000);
};
util.inherits(Ticker, EventEmitter);

var ticker = new Ticker();
ticker.on('tick', function (count) {
    console.log('tick: ', count);
});
