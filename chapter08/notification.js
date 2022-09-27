var spawn = require('child_process').spawn;

var child = spawn('ls', ['-la']);
child.stdout.once('data', function (data) {
    console.log('data from child: ' + data);
});
child.on('exit', function (code, signal) {
    if (code) {
        console.log('child process terminated with code ' + code);
    }
    if (signal) {
        console.log('child process terminated because of signal ' + signal);
    }
});

var other_child = spawn('sleep', ['10']);
other_child.once('data', function (data) {
    console.log('other child: ' + data);
});
other_child.on('exit', function (code, signal) {
    if (code) {
        console.log('other_child process terminated with code ' + code);
    }
    if (signal) {
        console.log('other_child process terminated because of signal ' + signal);
    }
})
setTimeout(function () {
    other_child.kill()
}, 2000);