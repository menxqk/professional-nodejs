var period = 1000;

var interval1 = setInterval(function () {
    console.log('tick1');
}, period);

var interval2 = setInterval(function () {
    console.log('tick2');
}, period);

setTimeout(function () {
    clearInterval(interval1);
    setTimeout(function () {
        clearInterval(interval2);
    }, 100);
}, 5000);
