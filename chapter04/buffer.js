var buf = Buffer.from('Hello World');
console.log(buf.toString(), buf.length);
buf = buf.slice(0, 5)
console.log(buf.toString(), buf.length);
console.log();

buf = Buffer.from('8b76fde713ce', 'base64');
console.log(buf.toString('base64'), buf.length);
console.log();

buf = Buffer.from('Hello Again!');
console.log(buf.toString(), buf.length);
buf2 = Buffer.alloc(buf.length);
buf.copy(buf2, 0, 0, buf.length);
console.log(buf2.toString(), buf.length);
