const util = require('util');
const EventEmitter = require('events').EventEmitter;

var MyClass = function () {
}
util.inherits(MyClass, EventEmitter);
MyClass.prototype.someMethod = function () {
    this.emit('custom event', 'argument 1', 'argument 2');
};

var myInstance = new MyClass();
myInstance.on('custom event', function (str1, str2) {
    console.log('got a custom event with the str1 %j and str2 %j!', str1, str2);
});

myInstance.someMethod();