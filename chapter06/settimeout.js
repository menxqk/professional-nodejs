var timeout_ms = 2000;
var timeout = setTimeout(function () {
    console.log('timed out!');
}, timeout_ms);

timeout_ms = 1000;
timeout = setTimeout(function () {
    console.log('this will be cleared.');
}, timeout_ms);
clearTimeout(timeout);