var period = 1000;
var interval = setInterval(function () {
    console.log('tick');
}, period);

setTimeout(function () {
    clearInterval(interval);
}, 5000);